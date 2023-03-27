/* eslint-disable import/no-extraneous-dependencies */
import * as yup from 'yup';

export const basicSchema = yup.object().shape({
  title: yup
    .string()
    .matches(/^[A-Za-z]+$/, 'Letters only')
    .min(3, 'Min 3 letters')
    .max(30, 'Max 30 letters')
    .required('Required'),
  author: yup
    .string()
    .matches(/^[A-Za-z]+$/, 'Letters only')
    .min(3, 'Min 3 letters')
    .max(30, 'Max 30 letters')
    .required('Required'),
  year: yup.number(),
  rating: yup.number().min(1, 'Required').max(5),
});
