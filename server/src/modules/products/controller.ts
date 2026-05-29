import { Request, Response } from 'express';
import * as productService from './service';

export const getAllProductsHandler = async (req: Request, res: Response) => {
  try {
    // Fetch products,  
    const products = await productService.getProducts();
    return res.status(200).json(products);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

};


export const createProductHandler = async (req: Request, res: Response) => {
  try {
    // Extract product data, error 
    const newProduct = await productService.createProduct(); 
    return res.status(201).json(newProduct);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};