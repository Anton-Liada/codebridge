import React, { useEffect } from 'react';
import { Card } from '../card/Card';
import { Loader } from '../loader';
import './CardList.scss';
import { fetchArticles } from '/src/features/articles/articlesSlice';
import { useAppDispatch, useAppSelector } from '/src/features/hooks/hooks';
import { Status } from '/src/types/enums';
import { IArticle } from '/src/types/types';

interface ICardListProps {
  articles: IArticle[];
  value: string;
}

export const CardList: React.FC<ICardListProps> = ({ articles, value }) => {
  const dispatch = useAppDispatch();
  const fetchRequestStatus = useAppSelector(state => state.articles.status);
  const errorMessage = useAppSelector(state => state.articles.error);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <>
      {fetchRequestStatus === Status.LOADING && <Loader />}

      {fetchRequestStatus === Status.FAILED && <p>{errorMessage}</p>}

      {fetchRequestStatus === Status.SUCCEEDED && (
        <div className="card-list home-page__card-list">
          {articles.map(article => (
            <Card key={article.id} article={article} value={value} />
          ))}
        </div>
      )}
    </>
  );
};