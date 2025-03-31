const connectDB = require("./database");
const Salary = require("./models/Salary");

async function seedData() {
  await connectDB();

  const sampleData = [
    { employeeId: "EMP001", name: "Alice", gender: "Female", department: "Engineering", position: "Software Engineer", salary: 70000, experience: 5, location: "New York", performanceRating: 4 },
    { employeeId: "EMP002", name: "Bob", gender: "Male", department: "Engineering", position: "Software Engineer", salary: 75000, experience: 5, location: "New York", performanceRating: 4 },
    { employeeId: "EMP003", name: "Emma", gender: "Female", department: "HR", position: "HR Manager", salary: 65000, experience: 6, location: "San Francisco", performanceRating: 5 },
  ];

  await Salary.insertMany(sampleData);
  console.log("✅ Sample Data Inserted!");

  process.exit();
}

seedData();
