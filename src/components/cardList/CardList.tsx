import React from 'react'
import { Card } from '../card/Card'
import './CardList.scss';

export const CardList = () => {
  return (
    <div className="card-list home-page__card-list">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
