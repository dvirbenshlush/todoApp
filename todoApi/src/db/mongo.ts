require("dotenv").config();
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI as string);

console.log('connected to mongodb')

export default mongoose;