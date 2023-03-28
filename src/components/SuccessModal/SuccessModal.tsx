import React from 'react';
import './SuccessModal.scss';
import formSuccess from '../../static/images/image__form-success.png';

type Props = {
  showForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SuccessModal: React.FC<Props> = ({ showForm }) => {
  return (
    <article className="success-modal">
      <img
        className="success-modal__img"
        src={formSuccess}
        alt="showing that the form was submitted successfully"
      />
      <h3 className="success-modal__title">The product was created!</h3>
      <button
        type="button"
        className="btn"
        onClick={() => showForm(false)}
      >
        Back to products
      </button>
    </article>
  );
};
