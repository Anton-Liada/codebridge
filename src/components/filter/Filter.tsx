import React from 'react';
import './Filter.scss';

interface IFilterProps {
  amountOfArticles: number;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Filter: React.FC<IFilterProps> = ({
  onChange,
  amountOfArticles,
  value,
}) => {
  return (
    <div className="filter home-page__filter">
      <label className="filter__label">Filter by keywords</label>

      <input
        className="filter__input"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />

      <p className="filter__results">{`Results: ${amountOfArticles}`}</p>
    </div>
  );
};
