import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURL ='mongodb://admin:admin123@54.212.141.165/?tls=false';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectToMongoDB;
