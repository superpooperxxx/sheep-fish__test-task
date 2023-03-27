import React from 'react';
import './ProductsPage.scss';

export const ProductsPage: React.FC = () => {
  return (
    <main className="products-page">
      <div className="container">
        <div>Header: Title + New Product Btn</div>
        <div>Search + Filter btn</div>
        <div>Products</div>
        <div>Pagination btn</div>
      </div>
    </main>
  );
};
