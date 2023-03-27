import React, { useState } from 'react';
import { Modal } from '../../components/Modal';
import { Header as ProductPageHeader } from '../../components/ProductsPage/Header';
import { NewProductForm } from '../../components/ProductsPage/NewProductForm';
import { ProductSearch } from '../../components/ProductsPage/ProductSearch';
import './ProductsPage.scss';

export const ProductsPage: React.FC = () => {
  const [isNewProductOpened, setIsNewProductOpened] = useState(false);

  return (
    <>
      {isNewProductOpened && (
        <Modal>
          <NewProductForm showForm={setIsNewProductOpened} />
        </Modal>
      )}
      <div className="products-page">
        <div className="container">
          <ProductPageHeader showForm={setIsNewProductOpened} />
          <main className="products-page__main">
            <div className="products-page__search-and-filter">
              <ProductSearch />
              <button
                type="button"
                className="products-page__filter-btn"
                aria-label="click to filter products"
              >
                {' '}
              </button>
            </div>
            <div>Products</div>
            <div>Pagination btn</div>
          </main>
        </div>
      </div>
    </>
  );
};
