import 'dotenv/config'; // Load environment variables from .env
import postgres from 'postgres'; // Use the postgres package for SQL access
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Check your .env file or environment configuration.",
  );
}

// Connect to Supabase Postgres using the connection string
export const client = postgres(process.env.DATABASE_URL, { ssl: 'require' });
export const db = drizzle(client, { schema });