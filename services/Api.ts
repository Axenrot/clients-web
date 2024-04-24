"use client";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.AWS_API_URL || "http://localhost:8000/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = (sessionStorage.getItem("token") || "") as string;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;
