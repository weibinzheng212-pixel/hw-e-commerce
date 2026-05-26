import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "X-Custom-Header": "foobar",
  },
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");

    if (token && config.headers) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
