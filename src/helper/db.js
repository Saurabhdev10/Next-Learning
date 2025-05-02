import mongoose from "mongoose";
import User from "../models/user.js";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "Work_Manager",
    });
    console.log("MongoDB connected....");

//testing and creating new user 

// const user=new User({
//   name: "John Doe", 
//   email: "sauraabh@gmail.com",
//   password: "12345678", 
//   about: "Software Engineer",
//   profilePic: "https://www.gravatar.com/avatar", });

//   await user.save();
//    console.log("User created successfully");



    // console.log("MongoDB connection details", connection);
    console.log ("MongoDB connection host details", connection.host);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
