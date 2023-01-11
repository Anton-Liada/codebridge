import React from 'react';
import { Link } from 'react-router-dom';
import { formattedDate } from './helpers';
import { IArticle } from '/src/types/types';
import './Card.scss';

interface IProps {
  article: IArticle;
}

export const Card: React.FC<IProps> = ({ article }) => {
  const { id, title, imageUrl, summary, publishedAt } = article;

  const shortenedTitle = title.length > 41 ? `${title.slice(0, 41)}...` : title;

  const shortenedSummary =
    summary.length > 100 ? `${summary.slice(0, 110)}...` : summary;

  return (
    <div className="card">
      <img src={imageUrl} alt="" className="card__img" />

      <div className="card__content">
        <p className="card__published">
          <span className="card__icon-calendar"></span>

          {formattedDate(publishedAt)}
        </p>

        <h3 className="card__title">{shortenedTitle}</h3>

        <p className="card__description">{shortenedSummary}</p>

        <Link to={`/articles/${id}`} className="card__link">
          Read more
          <span className="card__icon-arrow"></span>
        </Link>
      </div>
    </div>
  );
};
