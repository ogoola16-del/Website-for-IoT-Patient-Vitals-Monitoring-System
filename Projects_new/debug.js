require("dotenv").config();
const { Pool } = require("pg");

console.log("Attempting to connect...");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

pool
  .query("SELECT 1")
  .then((r) => {
    console.log("CONNECTED:", r.rows);
    process.exit(0);
  })
  .catch((e) => {
    console.error("FAILED:", e.message);
    process.exit(1);
  });
