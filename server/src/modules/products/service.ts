import { Request, Response } from 'express';
import {Product} from "./type";


class ProductService {
   products: Product[] = [];     

    async getProducts(): Promise<Product[]> {
        return this.products;
    }
    
    
    
    
    
    // async createProduct(productData: Omit<Product, 'id'>): Promise<Product> {
    //     const newProduct: Product = {                                                       
    //         id: this.products.length + 1,
    //         ...productData,
    //     };
    //     this.products.push(newProduct);
    //     return newProduct;
    // }
    
    
}
export const productService = new ProductService();
