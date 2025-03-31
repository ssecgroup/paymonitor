const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // Local MongoDB connection
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
    return client.db("equal_pay_analyzer"); // Database name
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
}

module.exports = connectDB;
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/equal_pay_analyzer", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected with Mongoose!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
}

module.exports = connectDB;
