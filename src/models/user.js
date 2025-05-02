import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
    password: {
        type: String,
        required: [true, "Password is Required"],
    },
    about :String,
    profilePic : {
        type: String,
        default: "https://www.gravatar.com/avatar"},

});
const User =mongoose.models.users ||mongoose.model("Users", userSchema);
export default User;
