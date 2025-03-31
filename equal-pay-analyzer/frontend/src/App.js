import React, { useEffect, useState } from "react";
import { getSalaries, getPayGap, addSalary } from "./api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

function App() {
  const [salaries, setSalaries] = useState([]);
  const [payGap, setPayGap] = useState({});
  const [newSalary, setNewSalary] = useState({ name: "", gender: "", salary: "" });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const salaryData = await getSalaries();
    const gapData = await getPayGap();
    setSalaries(salaryData);
    setPayGap(gapData);
  };

  const handleAddSalary = async () => {
    await addSalary(newSalary);
    fetchData();
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>💰 AI-Powered Equal Pay Analyzer</h2>

      <h3>📊 Gender Pay Gap: {payGap.payGap}</h3>

      <BarChart width={500} height={300} data={[payGap]}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="avgMaleSalary" fill="blue" name="Male Avg Salary" />
        <Bar dataKey="avgFemaleSalary" fill="pink" name="Female Avg Salary" />
      </BarChart>

      <h3>➕ Add Salary Data</h3>
      <input
        type="text"
        placeholder="Name"
        value={newSalary.name}
        onChange={(e) => setNewSalary({ ...newSalary, name: e.target.value })}
      />
      <select onChange={(e) => setNewSalary({ ...newSalary, gender: e.target.value })}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input
        type="number"
        placeholder="Salary"
        value={newSalary.salary}
        onChange={(e) => setNewSalary({ ...newSalary, salary: e.target.value })}
      />
      <button onClick={handleAddSalary}>Add</button>

      <h3>📜 Salary Records</h3>
      <ul>
        {salaries.map((s) => (
          <li key={s._id}>{s.name} ({s.gender}) - ${s.salary}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
