import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import payRoutes from "./routes/payRoutes.js"; // Import pay routes

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json()); // Enable JSON support

// API Route
app.use("/api/salaries", payRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected with Mongoose!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
