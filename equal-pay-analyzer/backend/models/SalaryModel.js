import mongoose from "mongoose";

const salarySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    salary: { type: Number, required: true },
    gender: { type: String, required: true },
  },
  { timestamps: true }
);

const Salary = mongoose.model("Salary", salarySchema);
export default Salary;
