import React from 'react';
import { Header as ProductPageHeader } from '../../components/ProductsPage/Header';
import { ProductSearch } from '../../components/ProductsPage/ProductSearch';
import './ProductsPage.scss';

export const ProductsPage: React.FC = () => {
  return (
    <div className="products-page">
      <div className="container">
        <ProductPageHeader />
        <main className="products-page__main">
          <div className="products-page__search-and-filter">
            <ProductSearch />
          </div>
          <div>Products</div>
          <div>Pagination btn</div>
        </main>
      </div>
    </div>
  );
};
