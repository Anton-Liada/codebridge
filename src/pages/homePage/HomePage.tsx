import React from 'react'
import { Card } from '/src/components/card';
import './HomePage.scss';
import { Filter } from '/src/components/filter';

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container">
        <Filter />

        <div className="card-list home-page__card-list">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
