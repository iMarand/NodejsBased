import { ACTS } from "../controllers/userContollers.mjs";
import express from "express";

const router = express.Router();
const COOKIE_MAX_AGE = 3 * 60 * 60 * 1000; 

router.get("/users/user-signup-endpoint", (req, res) => {
    const PARAMS = req._PARAMS_REGISTER;
    const Credentials = {
        email: PARAMS.get("userEmail"),
        username: PARAMS.get("userNames"),
        password: PARAMS.get("userPassword")
    };

    new ACTS().createUser(Credentials).then(result => {
        return res.status(200).json({
            message: result ? "User Was Created Successfully" : "Failed To Create User",
            actionBool: result.bool,
            status: result ? 200 : 422
        });
    }).catch(err => {
        return res.status(400).json({
            isError: err
        })
    })
});

router.post("/users/user-signin-endpoint", (req, res) => {
    const DATA = req.body;

    new ACTS().loginUser(DATA).then(result => {
        return (result.bool && result.token) ? 
            res.status(200).cookie("authToken", result.token, {
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                maxAge: COOKIE_MAX_AGE
            }).json({
                message: "Login Successfully",
                actionBool: true,
                status: 200
            }) : res.status(200).json({
                message: "Check your credentials and try again",
                status: 422,
                actionBool: false
            });

    }).catch(err => {
        return res.status(400).json({
            isError: err
        });
    })
});

router.get("/dashboard-products", (req, res) => {
    return res.status(200).json({
        message: "By Pass Endpoint",
        status: 378
    })
})


export default router;

