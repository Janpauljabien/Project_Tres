import express from "express";
import dotenv from "dotenv";

import authRoutes from "./Routes/auth.routes.js";
import connectMongoDB from "./DB/connect.MongoDB.js";

dotenv.config();

const app = express();

app.get("/",(req, res) =>{
    res.send("Server is up and running");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
    connectMongoDB();
});