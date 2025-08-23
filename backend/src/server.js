import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.get("/", (_req, res) => res.send("hello form server"));


app.listen(ENV.PORT, () => console.log("Server is connected to port: ", ENV.PORT));