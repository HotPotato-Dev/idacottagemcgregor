import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}


export function serveStatic(app: Express) {
   // Assumes client assets are built into 'dist/public' relative to project root.
  // __dirname will point to the directory of the compiled utils.js (e.g., dist/server)
  const distPath = path.resolve("dist/server", "..", "public");

  if (!fs.existsSync(distPath)) {
    log(`Static assets directory not found: ${distPath}. Ensure client is built.`, "error");
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }
  log(`Serving static files from ${distPath}`);
  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      log(`index.html not found in ${distPath}`, "error");
      res.status(404).send("Client application not found. Please build the client.");
    }
  });
}
