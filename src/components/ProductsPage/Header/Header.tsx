import React from 'react';

type Props = {
  showForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header: React.FC<Props> = React.memo(({ showForm }) => (
  <header className="products-page__header">
    <h1 className="products-page__title">Products</h1>
    <button
      type="button"
      className="products-page__new-product"
      onClick={() => showForm(true)}
    >
      New Product
    </button>
  </header>
));
