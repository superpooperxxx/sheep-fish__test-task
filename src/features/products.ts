import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/Product';

const initialState: Product[] = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addMultiple: (products, action: PayloadAction<Product[]>) => {
      products.push(...action.payload);
    },
    addOne: (products, action: PayloadAction<Product>) => {
      products.push(action.payload);
    },
    remove: (products, action: PayloadAction<number>) => {
      return products.filter((product) => product.id !== action.payload);
    },
  },
});

export default productsSlice.reducer;
export const { actions } = productsSlice;
