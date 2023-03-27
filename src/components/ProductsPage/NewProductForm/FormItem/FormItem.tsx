/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

type Props = {
  title: string;
  errorMessage: string | undefined;
  touched: boolean | undefined;
};

export const FormItem: React.FC<Props> = ({
  title,
  errorMessage,
  touched,
  children,
}) => (
  <label className="new-product-form__label">
    <span className="new-product-form__label-text">
      {title}
      {errorMessage && touched && (
        <span className="new-product-form__error-message">{errorMessage}</span>
      )}
    </span>
    {children}
  </label>
);
