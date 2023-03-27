import React from 'react';

export const Header: React.FC = () => (
  <header className="products-page__header">
    <h1 className="products-page__title">Products</h1>
    <button
      type="button"
      className="products-page__new-product"
      onClick={() => null}
    >
      New Product
    </button>
  </header>
);
