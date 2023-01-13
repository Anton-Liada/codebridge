import React from 'react';
import { Marker } from 'react-mark.js';
import { Link } from 'react-router-dom';
import { formattedDate } from '../../helpers/helpers';
import './card.scss';
import { IArticle } from '/src/types/types';

interface ICardProps {
  article: IArticle;
  value: string;
}

export const Card: React.FC<ICardProps> = ({ article, value }) => {
  const { id, title, imageUrl, summary, publishedAt } = article;

  return (
    <div className="card">
      <img src={imageUrl} alt="" className="card__img" />

      <div className="card__content">
        <p className="card__published">
          <span className="card__icon-calendar"></span>

          {formattedDate(publishedAt)}
        </p>

        <Marker mark={`${value}`}>
          <h3 className="card__title">{title}</h3>

          <p className="card__description">{summary}</p>
        </Marker>

        <Link to={`/articles/${id}`} className="card__link">
          Read more
          <span className="card__icon-arrow"></span>
        </Link>
      </div>
    </div>
  );
};
