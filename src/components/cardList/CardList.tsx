import React, { useEffect } from 'react';
import { Card } from '../card/Card';
import { Loader } from '../Loader';
import { fetchArticles } from '/src/features/articles/articlesSlice';
import { useAppDispatch, useAppSelector } from '/src/features/hooks/hooks';
import { Status } from '/src/types/enums';
import './CardList.scss';

export const CardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(state => state.articles.articles);
  const fetchRequestStatus = useAppSelector(state => state.articles.status);
  const errorMessage = useAppSelector(state => state.articles.error);

  useEffect(() => {
    if (fetchRequestStatus === Status.IDLE) {
      dispatch(fetchArticles());
    }
  }, [fetchRequestStatus, dispatch]);

  return (
    <div className="card-list home-page__card-list">
      {fetchRequestStatus === Status.LOADING && <Loader />}

      {fetchRequestStatus === Status.FAILED && <p>{errorMessage}</p>}

      {fetchRequestStatus === Status.SUCCEEDED && (
        articles.map(article => (
          <Card key={article.id} article={article} />
        )))
      }
    </div>
  );
};
