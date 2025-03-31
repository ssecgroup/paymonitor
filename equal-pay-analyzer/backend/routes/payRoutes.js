import express from "express";
import Salary from "../models/SalaryModel.js";

const router = express.Router();

// Get all salaries
router.get("/", async (req, res) => {
  try {
    const salaries = await Salary.find();
    res.json(salaries);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Add new salary data
router.post("/", async (req, res) => {
  const { name, role, salary, gender } = req.body;

  try {
    const newSalary = new Salary({ name, role, salary, gender });
    await newSalary.save();
    res.status(201).json(newSalary);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
});

export default router;
// This code defines an Express router for handling salary data.