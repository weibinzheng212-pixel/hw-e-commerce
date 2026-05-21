import axios from 'axios';

const instance = axios.create({
  baseURL: "https://dummyjson.com/products",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});