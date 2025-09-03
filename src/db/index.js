import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const connectDB = async () => {
  try {
    const DbInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\n Mogno DB Connected !! DB Host:${DbInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED", error);
    process.exit(1);
  }
};
export default connectDB;

