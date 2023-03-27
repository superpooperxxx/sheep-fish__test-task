/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export const ProductSearch: React.FC = () => (
  <form className="products-page__form">
    <label className="products-page__search-label">
      <div className="products-page__search-container">
        <input
          type="text"
          className="products-page__search"
          placeholder="Search for a Product"
        />
      </div>
    </label>
  </form>
);
