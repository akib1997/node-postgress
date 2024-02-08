
const pgp = require('pg-promise')();
import { Pool } from 'pg'



// Replace the following with your PostgreSQL connection string
const connectionString = 'postgresql://postgres:postgres8@localhost:2023/node-postgres';


const db = pgp(connectionString);


export { db };