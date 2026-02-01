import axios from "axios";
import axiosInstance from "./axiosInstance";

export const registerUser = (data) => {
  const res = axiosInstance.post("/api/v1/user/register", data);
  return res;
};

export const loginUser = (data) => {
  const res = axiosInstance.post("/api/v1/user/login", data);
  return res;
};

export const logoutUser = () => {
  const res = axiosInstance.post("/api/v1/user/logout");
  return res;
};

export const fetchCurrUser = () => {
  const res = axiosInstance.get("/api/v1/user/me")
  return res;
}
