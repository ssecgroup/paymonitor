const mongoose = require("mongoose");

const SalarySchema = new mongoose.Schema({
  employeeId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  department: { type: String, required: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true },
  experience: { type: Number, required: true }, // Years of experience
  location: { type: String, required: true }, 
  performanceRating: { type: Number, min: 1, max: 5 }, // Optional: 1 to 5 rating
  dateRecorded: { type: Date, default: Date.now }
});

const Salary = mongoose.model("Salary", SalarySchema);
module.exports = Salary;
