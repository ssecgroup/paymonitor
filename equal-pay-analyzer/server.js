const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./database");
const Salary = require("./models/Salary");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// 🚀 API to Fetch All Salary Records
app.get("/api/salaries", async (req, res) => {
  try {
    const salaries = await Salary.find();
    res.json(salaries);
  } catch (error) {
    res.status(500).json({ error: "Error fetching salaries" });
  }
});

// 🚀 API to Add Salary Record
app.post("/api/salaries", async (req, res) => {
  try {
    const newSalary = new Salary(req.body);
    await newSalary.save();
    res.status(201).json({ message: "Salary added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error adding salary" });
  }
});

// 🚀 API to Get Gender Pay Gap Analysis
app.get("/api/pay-gap", async (req, res) => {
  try {
    const maleSalaries = await Salary.aggregate([
      { $match: { gender: "Male" } },
      { $group: { _id: null, avgSalary: { $avg: "$salary" } } },
    ]);

    const femaleSalaries = await Salary.aggregate([
      { $match: { gender: "Female" } },
      { $group: { _id: null, avgSalary: { $avg: "$salary" } } },
    ]);

    const avgMaleSalary = maleSalaries[0]?.avgSalary || 0;
    const avgFemaleSalary = femaleSalaries[0]?.avgSalary || 0;
    const payGap = ((avgMaleSalary - avgFemaleSalary) / avgMaleSalary) * 100;

    res.json({ avgMaleSalary, avgFemaleSalary, payGap: payGap.toFixed(2) + "%" });
  } catch (error) {
    res.status(500).json({ error: "Error calculating pay gap" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
