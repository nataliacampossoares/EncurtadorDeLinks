import "dotenv/config";
import pg from "pg";

const { Pool } = pg;

export const dbPool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
