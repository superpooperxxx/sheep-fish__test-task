import { Product } from '../types/Product';
import { client } from './utils/requests';

type ApiData = {
  products: Product[];
  limit: number;
  total: number;
  skip: number;
};

export const loadProducts = (limit = 30, skip = 0) => {
  return client.get<ApiData>(`/products?limit=${limit}&skip=${skip}`);
};

export const createProduct = (data: Partial<Product>) => {
  return client.post<Product>('/products/add', data);
};

export const removeProduct = (productId: number) => {
  return client.delete<Product>(`/products/${productId}`);
};
