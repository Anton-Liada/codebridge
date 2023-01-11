import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ArticlePage } from './pages/articlePage';
import { HomePage } from './pages/homePage';
import { NotFoundPage } from './pages/notFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
