import React from 'react'
import './Filter.scss';

export const Filter = () => {
  return (
    <div className="filter home-page__filter">
      <label className="filter__label">
        Filter by keywords
      </label>

      <input
        type="text"
        placeholder="Search"
      />
    </div>
  )
}
