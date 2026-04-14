import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, default: "Anonymous" },
  skills: [String], 
  experience: String, 
  interest: String,
  goal: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);