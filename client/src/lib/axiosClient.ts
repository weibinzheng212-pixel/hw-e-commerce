import axios from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const getToken = localStorage.getItem('token');

const instance = axios.create({
  baseURL: "https://dummyjson.com/products",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken;
    
    if (token) {
      config.headers.set("Authorization", `token ${token}`);
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;