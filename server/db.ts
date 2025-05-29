import 'dotenv/config'; // Load environment variables from .env
import postgres from 'postgres'; // Use the postgres package for SQL access
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from "@shared/schema";
process.env.DATABASE_URL = 'postgresql://postgres:8WtRh4w7bVzLqOI4@db.bstmdavlwebmhvklavat.supabase.co:5432/postgres'

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Connect to Supabase Postgres using the connection string
export const client = postgres(process.env.DATABASE_URL, { ssl: 'require' });
export const db = drizzle(client, { schema });