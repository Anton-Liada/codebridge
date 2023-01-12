import React from 'react';
import { Marker } from 'react-mark.js';
import { Link } from 'react-router-dom';
import { formattedDate, shortenedText } from '../../helpers/helpers';
import './Card.scss';
import { IArticle } from '/src/types/types';

interface ICardProps {
  article: IArticle;
  value: string;
}

export const Card: React.FC<ICardProps> = ({ article, value }) => {
  const { id, title, imageUrl, summary, publishedAt } = article;

  const shortenedTitle = shortenedText(title, 40);
  const shortenedSummary = shortenedText(summary, 140);

  return (
    <div className="card">
      <img src={imageUrl} alt="" className="card__img" />

      <div className="card__content">
        <p className="card__published">
          <span className="card__icon-calendar"></span>

          {formattedDate(publishedAt)}
        </p>

        <Marker mark={`${value}`}>
          <h3 className="card__title">{shortenedTitle}</h3>

          <p className="card__description">{shortenedSummary}</p>
        </Marker>

        <Link to={`/articles/${id}`} className="card__link">
          Read more
          <span className="card__icon-arrow"></span>
        </Link>
      </div>
    </div>
  );
};
