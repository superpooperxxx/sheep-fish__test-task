import React from 'react';
import './NotFoundPage.scss';
import { useNavigate } from 'react-router-dom';
import img from '../../static/images/image__not-found.png';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="not-found">
      <div className="container not-found__container">
        <img
          className="not-found__img"
          src={img}
          alt="not found illustration"
        />
        <button
          type="button"
          className="btn"
          onClick={() => navigate('/')}
        >
          Home Page
        </button>
      </div>
    </main>
  );
};
