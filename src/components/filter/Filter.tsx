import React from 'react';
import './Filter.scss';
import { useAppSelector } from '/src/features/hooks/hooks';

export const Filter: React.FC = () => {
  const amountOfArticles = useAppSelector(state => state.articles.articles);

  return (
    <div className="filter home-page__filter">
      <label className="filter__label">Filter by keywords</label>

      <input className="filter__input" type="text" placeholder="Search..." />

      <p className="filter__results">{`Results: ${amountOfArticles.length}`}</p>
    </div>
  );
};
