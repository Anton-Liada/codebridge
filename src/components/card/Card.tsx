import React from 'react'
import './Card.scss';

export const Card = () => {
  return (
    <div className="card">
      <img
        src="https://www.teslarati.com/wp-content/uploads/2023/01/Crew-Dragon-Cargo-Dragon-F9-Starship-B7-S24-FH-LC-40-39A-SLC-4E-Starbase-SpaceX-NASA-Richard-Angle-1-c.jpg"
        alt=""
        className="card__img"
      />

      <div className="card__content">
        <p className="card__published">
          <span className="card__icon-calendar"></span>

          June 29th, 2021
        </p>

        <h2 className="card__title">
          The 2020 Worlds Most Valuable Brands
        </h2>

        <p className="card__description">
          Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...
        </p>

        <a href="#" className="card__link">
          Read more
          
          <span className='card__icon-arrow'></span>
        </a>
      </div>
    </div>
  )
}
