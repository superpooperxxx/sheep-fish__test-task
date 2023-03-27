/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable object-curly-newline */
import React, { ChangeEvent } from 'react';
import { years } from '../years';
import { FormItem } from '../FormItem';

type Props = {
  errorMessage: string | undefined;
  touched: boolean | undefined;
  selectedYear: number;
  onChange: (e: ChangeEvent<any>) => void;
};

export const YearSelect: React.FC<Props> = React.memo(
  ({ errorMessage, touched, selectedYear, onChange }) => (
    <FormItem
      title="Year"
      errorMessage={errorMessage}
      touched={touched}
    >
      <select
        name="year"
        className="new-product-form__input new-product-form__years"
        value={selectedYear}
        onChange={onChange}
      >
        {years(15).map((year) => (
          <option
            value={year}
            key={year}
          >
            {year}
          </option>
        ))}
      </select>
    </FormItem>
  ),
);
