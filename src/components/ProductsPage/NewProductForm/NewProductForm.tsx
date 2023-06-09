/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { actions as productsActions } from '../../../features/products';
import './NewProductForm.scss';
import { FormItem } from './FormItem';
import { basicSchema } from './schemas';
import { StarsRating } from './StarsRating';
import { YearSelect } from './YearSelect';
import { createProduct } from '../../../api/products';
import { SuccessModal } from '../../SuccessModal';

type Props = {
  showForm: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormState = {
  title: string;
  author: string;
  year: number;
  rating: number;
};

export const NewProductForm: React.FC<Props> = ({ showForm }) => {
  const dispatch = useDispatch();
  const [isSuccessSubmit, setIsSuccessSubmit] = useState(false);
  const [isDataSending, setIsDataSending] = useState(false);

  // const navigate = useNavigate();

  const submitHandler = (data: FormState) => {
    setIsDataSending(true);
    const { title, rating } = data;

    const dataForApi = {
      title,
      description: '',
      price: 0,
      discountPercentage: 0,
      rating: +rating,
      stock: 0,
      brand: '',
      category: '',
      thumbnail: '',
      images: [''],
    };

    createProduct(dataForApi)
      .then((res) => {
        dispatch(productsActions.addOne(res));
        setIsSuccessSubmit(true);
      })
      // eslint-disable-next-line no-alert
      .catch(() => window.alert('something went wrong'))
      .finally(() => {
        setIsDataSending(false);
      });
  };

  // eslint-disable-next-line operator-linebreak
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        title: '',
        author: '',
        year: new Date().getFullYear(),
        rating: 0,
      },
      validationSchema: basicSchema,
      onSubmit: submitHandler,
    });

  return (
    <>
      {isSuccessSubmit ? (
        <SuccessModal showForm={showForm} />
      ) : (
        <form
          className="new-product-form page__new-product-form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          {isDataSending && (
            <div
              className="new-product-form__loader"
              aria-label="sending data"
            >
              {' '}
            </div>
          )}
          <div className="new-product-form__header">
            <h2 className="new-product-form__title">Add New Product</h2>
            <input
              type="button"
              className="new-product-form__close"
              aria-label="click to close the form"
              onClick={() => showForm(false)}
            />
          </div>

          {/* Title */}
          <FormItem
            title="Title"
            errorMessage={errors.title}
            touched={touched.title}
          >
            <input
              name="title"
              type="text"
              className="new-product-form__input"
              placeholder="Title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>

          {/* Author */}
          <FormItem
            title="Author"
            errorMessage={errors.author}
            touched={touched.author}
          >
            <input
              name="author"
              type="text"
              className="new-product-form__input"
              placeholder="Author"
              value={values.author}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>

          <div className="new-product-form__container">
            {/* Year */}
            <YearSelect
              errorMessage={errors.year}
              touched={touched.year}
              selectedYear={values.year}
              onChange={handleChange}
            />

            {/* Rating */}
            <StarsRating
              errorMessage={errors.rating}
              touched={touched.rating}
              rating={values.rating}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn new-product-form__submit"
          >
            Add New Product
          </button>
        </form>
      )}
    </>
  );
};
