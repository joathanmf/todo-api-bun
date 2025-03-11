import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  verbose: true,
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  }
});