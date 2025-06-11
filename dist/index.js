var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import express2 from "express";
import cookieParser from "cookie-parser";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  enquiries: () => enquiries,
  insertEnquirySchema: () => insertEnquirySchema,
  insertUserSchema: () => insertUserSchema,
  users: () => users
});
import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  checkinDate: text("checkin_date"),
  checkoutDate: text("checkout_date"),
  guests: integer("guests"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow()
});
var insertEnquirySchema = createInsertSchema(enquiries).omit({
  id: true,
  createdAt: true
});
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});

// server/db.ts
import "dotenv/config";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Check your .env file or environment configuration."
  );
}
var client = postgres(process.env.DATABASE_URL, { ssl: "require" });
var db = drizzle(client, { schema: schema_exports });

// server/storage.ts
import { eq, desc } from "drizzle-orm";
var DatabaseStorage = class {
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || void 0;
  }
  async getUserByUsername(username) {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || void 0;
  }
  async createUser(insertUser) {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  async createEnquiry(insertEnquiry) {
    const [enquiry] = await db.insert(enquiries).values(insertEnquiry).returning();
    return enquiry;
  }
  async getEnquiries() {
    return await db.select().from(enquiries).orderBy(desc(enquiries.createdAt));
  }
  async getEnquiry(id) {
    const [enquiry] = await db.select().from(enquiries).where(eq(enquiries.id, id));
    return enquiry || void 0;
  }
};
var storage = new DatabaseStorage();

// server/routes.ts
import { z } from "zod";
var adminSessions = /* @__PURE__ */ new Set();
var generateSessionId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};
var requireAuth = (req, res, next) => {
  const sessionId = req.headers["x-session-id"] || req.cookies?.adminSession;
  if (!sessionId || !adminSessions.has(sessionId)) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};
async function registerRoutes(app2) {
  app2.post("/api/enquiries", async (req, res) => {
    try {
      const validatedData = insertEnquirySchema.parse(req.body);
      const enquiry = await storage.createEnquiry(validatedData);
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
  app2.get("/api/enquiries", requireAuth, async (req, res) => {
    try {
      const enquiries2 = await storage.getEnquiries();
      res.json(enquiries2);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/enquiries/:id", async (req, res) => {
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
  app2.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      if (username === "admin" && password === "cottage2024") {
        const sessionId = generateSessionId();
        adminSessions.add(sessionId);
        res.cookie("adminSession", sessionId, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 24 * 60 * 60 * 1e3
          // 24 hours
        });
        res.json({ success: true, sessionId });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/admin/auth", (req, res) => {
    const sessionId = req.headers["x-session-id"] || req.cookies?.adminSession;
    if (sessionId && adminSessions.has(sessionId)) {
      res.json({ authenticated: true });
    } else {
      res.status(401).json({ authenticated: false });
    }
  });
  app2.post("/api/admin/logout", (req, res) => {
    const sessionId = req.headers["x-session-id"] || req.cookies?.adminSession;
    if (sessionId) {
      adminSessions.delete(sessionId);
    }
    res.clearCookie("adminSession");
    res.json({ success: true });
  });
  const httpServer = createServer(app2);
  return httpServer;
}

import express from "express";
import path from "path";
import fs from "fs";

function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
function serveStatic(app2) {
  const distPath = path.resolve(__dirname, "..", "public");
  if (!fs.existsSync(distPath)) {
    log(`Static assets directory not found: ${distPath}. Ensure client is built.`, "error");
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  log(`Serving static files from ${distPath}`);
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      log(`index.html not found in ${distPath}`, "error");
      res.status(404).send("Client application not found. Please build the client.");
    }
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    log(`Error: ${status} - ${message}${err.stack ? ` - Stack: ${err.stack}` : ""}`, "error");
    res.status(status).json({ message });
  });
  serveStatic(app);
  const port = process.env.PORT || 5e3;
  server.listen({
    port: Number(port),
    host: "0.0.0.0",
    // reusePort: true, // Note: reusePort is not a standard Node.js http.Server option.
  }, () => {
    log(`serving on port ${port}`);
  });
})();
