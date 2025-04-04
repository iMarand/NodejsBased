import { db } from "../config/db.mjs";
import { users } from "../config/dbschema.mjs";
import { eq, and } from "drizzle-orm";
import { EncryptData, DecryptData } from "../cryptoHelper.mjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET_HEX;
const JWT_EXPIRES_IN = '3h';

export class ACTS {
    // constructor(w) {this._w = w;};

    /** Create New User Controller (FROM POST METHOD) */
    async createUser(userCred) {
        userCred.id = 0;
        userCred.email = EncryptData(userCred.email);
        userCred.password = EncryptData(userCred.password);
        
        try {
            const result = await db.insert(users).values(userCred);

            return {
                data: result,
                msg: "Reached Databases",
                bool: true
            };

        } catch(err) {
            return {
                message: err,
                status: 400,
                what: "Error"
            };
        }
    };

    /** Get Specified User Controller (FROM GET METHOD) */
    async loginUser(userCred) {
        userCred.email = EncryptData(userCred.email);
        userCred.password = EncryptData(userCred.password);

        try {
            const result = await db.select().from(users).where(and(
                eq(users.email, userCred.email),
                eq(users.password, userCred.password)
            ));

            return (!result.length) ? 
                {
                    data: [],
                    msg: "Invalid Credentials",
                    bool: false 
                }
            :  
            (() => {
                const payload = {
                    usernames: result[0].username,
                    email: DecryptData(userCred.email)
                };

                let token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
                return {
                    data: result,
                    token: token,
                    msg: "Login Successfully",
                    bool: true
                }
            })();

        } catch(err) {
            return {
                message: err,
                status: 400,
                what: "Error"
            }
        }
    };

     /** Update Existing User Controller (FROM PUT METHOD) */
    // async updateUser(tableName, id, entry) {
    //     let entries = Object.entries(entry);
    //     let user;

    //     entries.map(async (k, i) => {
    //         let eE = (k[0] == "email") ? EncryptData(k[1]) : eE = k[1];

    //         const iQUERY = `UPDATE ${tableName} SET ${k[0]} = "${eE}" WHERE id = ${id}`;
    //         user = await _pool.query(iQUERY);
    //     });

    //     return user;
    // };

     /** Delete Specified User (FROM DELETE METHOD) */
    // async deleteUser(tableName, id) {
    //     const iQUERY = `DELETE FROM ${tableName} WHERE id = ${id}`;
    //     let listUsers = await _pool.query(iQUERY);

    //     return (listUsers) ? listUsers : false;
    // }


}
