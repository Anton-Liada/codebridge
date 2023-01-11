import React from 'react'
import './HomePage.scss';
import { CardList } from '/src/components/cardList';
import { Filter } from '/src/components/filter';

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container">
        <Filter />

        < CardList/>
      </div>
    </div>
  )
}
