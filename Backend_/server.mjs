/** Server Javascript */

import express from "express";
import router from "./routes/userRoutes.mjs";
import { handleMiddleWare } from "./routes/middleware.mjs";
import cookieParser from "cookie-parser";

import cors from "cors";

const app = express();
const PORT = 2004;

app.use(express.json(), express.urlencoded({ extended: true }), cookieParser() ,cors({
    origin: 'http://localhost:5173',
    credentials: true
}), handleMiddleWare, router);

app.listen(PORT, () => {
    console.log({
        link: `http://localhost:${PORT}/`
    });
});
