import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

// Pages
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductsPage } from './pages/ProductsPage';

export const App: React.FC = () => (
  <>
    <Routes>
      <Route
        path="/"
        element={<ProductsPage />}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  </>
);
