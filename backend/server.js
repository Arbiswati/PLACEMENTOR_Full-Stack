import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/user.js";
import getGuidance from "./utils/careerRules.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://arbiswati:Arbi0107@cluster0.hdvu6h7.mongodb.net/placementor?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => console.log("DB connected"))
.catch((err) => console.log("DB connection error:", err));

// ✅ FIXED ROUTE
app.post("/guidance", async (req, res) => {
  try {
    console.log("Incoming data:", req.body); // DEBUG

    // ✅ FIX: handle both interest & interests
    let { name, skills, experience, interest, interests, goal } = req.body;

    // 🔥 MAIN FIX
    interest = interest || interests || "";

    // ✅ Convert skills array to string if needed
    if (Array.isArray(skills)) {
      skills = skills.join(", ");
    }

    // ✅ Safety (avoid crash)
    interest = interest || "";
    goal = goal || "";

    // 1. Get guidance
    const guidance = getGuidance({ skills, interest, goal });

    // 2. Save to DB
    const newUser = new User({ 
      name: name || "Anonymous", 
      skills: Array.isArray(req.body.skills) ? req.body.skills : [skills],
      experience, 
      interest, 
      goal 
    });

    await newUser.save();

    // 3. Send response
    res.json({
      suggestion: guidance.advice,
      roadmap: guidance.steps,
      resources: guidance.link
    });

  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});