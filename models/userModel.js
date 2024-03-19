import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "password is required"],
    },
    address: {
      type: Array,
    },
    phone: {
      type: String,
      require: [true, "phone number is require"],
    },
    userType: {
      type: String,
      require: [true, "user type is required"],
      default: "clinet",
      enum: ["clinet", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
    },
    answer: {
      type: String,
      require: [true, "Answer is required"],
    },
  },
  { timestamps: true }
);
export default mongoose.model("user", userSchema);
