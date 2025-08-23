import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URL)
        console.log("Connected to the database successfully")
    } catch (error) {
        console.log("Unable to connect to the database")
        process.exit(1)
    }
}