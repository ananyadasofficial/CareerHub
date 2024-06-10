// src/components/utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Change this to your actual API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
