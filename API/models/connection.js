import mongoose from "mongoose";
const url="mongodb://127.0.0.1/Universal";
mongoose.connect(url);
console.log("Successfully connected to Database")