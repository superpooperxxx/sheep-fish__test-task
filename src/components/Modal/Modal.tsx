import React from 'react';
import './Modal.scss';

export const Modal: React.FC = ({ children }) => (
  <div className="modal">
    <div className="container modal__container">{children}</div>
  </div>
);
