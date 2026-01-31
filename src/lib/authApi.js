import axios from "axios";
import axiosInstance from "./axiosInstance";

export const registerUser = (data) => {
  return axios.post("http://localhost:8000/api/v1/user/register", data);
};

export const loginUser = (data) => {
  return axiosInstance.post("/api/v1/user/login", data);
};

export const logoutUser = () => {
  return axiosInstance.post("/api/v1/user/logout");
};

// export const getProtectedData = () => {
//   return axiosInstance.get("api/v1/user/protected");
// };
