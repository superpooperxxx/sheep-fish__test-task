import React from 'react';
import { Header as ProductPageHeader } from '../../components/ProductsPage/Header';
import './ProductsPage.scss';

export const ProductsPage: React.FC = () => {
  return (
    <div className="products-page">
      <div className="container">
        <ProductPageHeader />
        <main>
          <div>Search + Filter btn</div>
          <div>Products</div>
          <div>Pagination btn</div>
        </main>
      </div>
    </div>
  );
};
