import { Product } from '../types/Product';
import { client } from './utils/requests';

export const loadProducts = (limit = 30, skip = 0) => {
  return client.get<Product[]>(`/products?limit=${limit}&skip=${skip}`);
};

export const createProduct = (data: Partial<Product>) => {
  return client.post<Product>('/products/add', data);
};

export const removeProducts = (productId: number) => {
  return client.delete(`/products/${productId}`);
};
