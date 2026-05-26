import type { Category, ProductResponse, Products } from "../../types/type";

export const fetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data as ProductResponse;
};


export const fetchCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  const data = await res.json();
  return data as Category[];
};




