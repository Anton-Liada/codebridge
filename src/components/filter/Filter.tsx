import React from 'react'
import './Filter.scss';

export const Filter = () => {
  return (
    <div className="filter home-page__filter">
      <label className="filter__label">
        Filter by keywords
      </label>

      <input
        className="filter__input"
        type="text"
        placeholder="Search..."
      />

      <p className="filter__results">
        Results: 6
      </p>
    </div>
  )
}
