/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

type Props = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const ProductSearch: React.FC<Props> = React.memo(
  ({ query, setQuery }) => (
    <form className="products-page__form">
      <label className="products-page__search-label">
        <div className="products-page__search-container">
          <input
            type="text"
            className="products-page__search"
            placeholder="Search for a Product"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </label>
    </form>
  ),
);
