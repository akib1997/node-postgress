import { db } from "./db/db";

async function main() {
  try {
    // const result = await db.query("SELECT $1 AS message", [
    //   "Hello, PostgreSQL!!!!",
    // ]);
    // console.log(result[0].message);
    // console.log(db);
    const nameData = {
      name: 'John Doe',
    };
    
    // Sample data for 'address' table
    const addressData = {
      address: '123 Main St, Anytown, CA 12345',
    };

    db.connect()
      .then((obj: any) => {
        // console.log("🚀 ~ db.connect ~ obj:", obj)
        console.log("Connected to PostgreSQL");

       const addColumnQuery = `INSERT INTO customers (name, address) VALUES ('bs 24', 'Amtoli 2');`;


        // Creating the table
        return obj.none(addColumnQuery);
      })
      .then(() => {
        console.log(`Data added successfully`);
      })
      .catch((error: any) => {
        console.error("Error:", error);
      });
  } catch (error) {
    console.error("Error executing query:", error);
  } finally {
    // Close the database connection
    console.log("Closing database connection");

    db.$pool.end();
  }
}

main();
