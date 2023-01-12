import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ArticlePage.scss';
import { Loader } from '/src/components/loader';
import { fetchOneArticle } from '/src/features/articles/articlesSlice';
import { useAppDispatch, useAppSelector } from '/src/features/hooks/hooks';
import { Status } from '/src/types/enums';

export const ArticlePage: React.FC = () => {
  const { id = '' } = useParams();
  const dispatch = useAppDispatch();
  const fetchRequestStatus = useAppSelector(state => state.articles.status);
  const errorMessage = useAppSelector(state => state.articles.error);

  useEffect(() => {
    dispatch(fetchOneArticle(+id));
  }, []);

  const article = useAppSelector(state => state.articles.article);

  return (
    <>
      {fetchRequestStatus === Status.LOADING && <Loader />}

      {fetchRequestStatus === Status.FAILED && <p>{errorMessage}</p>}

      {fetchRequestStatus === Status.SUCCEEDED && (
        <div className="article">
          <div className="article__img-wrapper">
            <img
              src={article?.imageUrl}
              alt="article image"
              className="article__img"
            />
          </div>

          <div className="container">
            <div className="article__wrapper">
              <h2 className="article__title">{article?.title}</h2>

              <p className="article__description">{`${article?.summary}`}</p>
            </div>

            <Link to="/" className="article__link">
              <span className="article__link-icon"></span>
              Back to homepage
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
