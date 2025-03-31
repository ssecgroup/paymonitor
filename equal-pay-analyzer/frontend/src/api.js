import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getSalaries = async () => {
  const response = await axios.get(`${API_URL}/salaries`);
  return response.data;
};

export const getPayGap = async () => {
  const response = await axios.get(`${API_URL}/pay-gap`);
  return response.data;
};

export const addSalary = async (salaryData) => {
  const response = await axios.post(`${API_URL}/salaries`, salaryData);
  return response.data;
};
