import { mysqlTable, varchar, int, primaryKey, text } from "drizzle-orm/mysql-core";

const TABLE = "users";
export const users = mysqlTable(TABLE, {
    id: int('id').primaryKey().autoincrement(),
    username: varchar('usernames', { length: 250}),
    email: varchar('email', { length: 250 }),
    password: varchar('password', { length: 200 })
});
