import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true, // 🔥 REQUIRED for cookies
});

/* ===============================
   AUTO REFRESH ACCESS TOKEN
================================ */
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/user/refresh`,
          {},
          { withCredentials: true }
        );
        return axiosInstance(originalRequest);
      } catch (err) {
        // window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
