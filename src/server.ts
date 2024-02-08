import { Pool } from "pg";

const express = require("express");
const app = express();
// const connectionString = 'postgresql://postgres:postgres8@localhost:2023/node-postgres';

const pool = new Pool({
    connectionString: 'postgresql://postgres:postgres8@localhost:2023/node-postgres',
});

app.get("/users", async (req: any, res: any) => {
  try {
    const client = await pool.connect();
    console.log("🚀 ~ app.get ~ client:", client)
    const result = await client.query("SELECT * FROM customers");
    const users = result.rows;
    console.log("🚀 ~ app.get ~ users:", users);
    client.release();

    res.json(users);
  } catch (error) {
    console.error("Error retrieving users", error);
    res.status(500).json({ error: "Error retrieving users" });
  }
});

app.get("/customers", async (req: any, res: any) => {
    
})

const port = 3000; // or your desired port number

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
