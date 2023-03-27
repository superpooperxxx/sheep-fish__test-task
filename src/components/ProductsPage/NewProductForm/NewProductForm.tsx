/* eslint-disable object-curly-newline */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { actions as productsActions } from '../../../features/products';
import './NewProductForm.scss';
import { FormItem } from './FormItem';
import { basicSchema } from './schemas';
import { StarsRating } from './StarsRating';
import { YearSelect } from './YearSelect';
import { createProduct } from '../../../api/products';
// import { useAppSelector } from '../../../app/hooks';

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
  // const [isCreating, setIsCreating] = useState(false);
  const dispatch = useDispatch();
  // const products = useAppSelector((state) => state.products);

  const submitHandler = (data: FormState) => {
    const { title, rating } = data;

    createProduct({ title, rating: +rating })
      .then((res) => {
        dispatch(productsActions.addOne(res));
      })
      .catch((error) => window.console.log(error));

    showForm(false);
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
    <form
      className="new-product-form page__new-product-form"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
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
        className="new-product-form__send"
      >
        Add New Product
      </button>
    </form>
  );
};
