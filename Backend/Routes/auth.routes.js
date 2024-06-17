import express from "express";
import {newAccount,login,logout} from "../Controllers/auth.controller.js"

const authRoutes = express.Router();//getting the router from express automatically...

authRoutes.post("/newAccount", newAccount);

authRoutes.post("/login", login);

authRoutes.post("/logout", logout);


export default authRoutes;