/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent } from 'react';

type Props = {
  errorMessage: string | undefined;
  touched: boolean | undefined;
  rating: number;
  onChange: (e: ChangeEvent<any>) => void;
};

export const StarsRating: React.FC<Props> = React.memo(
  ({ errorMessage, touched, rating, onChange }) => (
    <div className="new-product-form__label">
      <span className="new-product-form__label-text">
        Rating
        {errorMessage && touched && (
          <span className="new-product-form__error-message">
            {errorMessage}
          </span>
        )}
      </span>

      <div
        className={`new-product-form__stars new-product-form__stars--${rating}`}
      >
        {[1, 2, 3, 4, 5].map((value) => (
          <label
            key={value}
            className="new-product-form__star"
          >
            <input
              className="new-product-form__star-btn"
              type="radio"
              name="rating"
              value={value}
              onChange={onChange}
            />
          </label>
        ))}
      </div>
    </div>
  ),
);
