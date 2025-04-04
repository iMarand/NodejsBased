import SQL from "mysql2";
import { drizzle } from "drizzle-orm/mysql2";

// Configure Mysql Database
const pool = SQL.createPool({
    database: "users",
    host: "localhost",
    password: "",
    user: "root",
    waitForConnections: true,
    connectionLimit: 10
});

export const db = drizzle(pool);

let connected = pool ? 
    "Database Connected Successfully" : 
    "Connection Error";

console.log(connected);



