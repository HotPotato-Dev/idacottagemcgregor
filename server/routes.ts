import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnquirySchema } from "@shared/schema";
import { z } from "zod";

// Simple session store for admin authentication
const adminSessions = new Set<string>();

const generateSessionId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

// Middleware to check admin authentication
const requireAuth = (req: any, res: any, next: any) => {
  const sessionId = req.headers['x-session-id'] || req.cookies?.adminSession;
  if (!sessionId || !adminSessions.has(sessionId)) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Enquiry routes
  app.post("/api/enquiries", async (req, res) => {
    try {
      const validatedData = insertEnquirySchema.parse(req.body);
      const enquiry = await storage.createEnquiry(validatedData);
      
      // In a real implementation, you would send email notifications here
      console.log("New enquiry received:", enquiry);
      
      res.status(201).json(enquiry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.get("/api/enquiries", requireAuth, async (req, res) => {
    try {
      const enquiries = await storage.getEnquiries();
      res.json(enquiries);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/enquiries/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const enquiry = await storage.getEnquiry(id);
      
      if (!enquiry) {
        res.status(404).json({ message: "Enquiry not found" });
        return;
      }
      
      res.json(enquiry);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Admin authentication routes
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      // Simple hardcoded admin credentials (in production, use proper hashing)
      if (username === "admin" && password === "cottage2024") {
        const sessionId = generateSessionId();
        adminSessions.add(sessionId);
        
        // Set cookie for browser
        res.cookie('adminSession', sessionId, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });
        
        res.json({ success: true, sessionId });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/admin/auth", (req: any, res) => {
    const sessionId = req.headers['x-session-id'] || req.cookies?.adminSession;
    if (sessionId && adminSessions.has(sessionId)) {
      res.json({ authenticated: true });
    } else {
      res.status(401).json({ authenticated: false });
    }
  });

  app.post("/api/admin/logout", (req: any, res) => {
    const sessionId = req.headers['x-session-id'] || req.cookies?.adminSession;
    if (sessionId) {
      adminSessions.delete(sessionId);
    }
    res.clearCookie('adminSession');
    res.json({ success: true });
  });

  const httpServer = createServer(app);
  return httpServer;
}
