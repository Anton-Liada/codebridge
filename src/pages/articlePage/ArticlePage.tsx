import React from 'react';
import { useLocation } from 'react-router';
import { useAppSelector } from '/src/features/hooks/hooks';

export const ArticlePage: React.FC = () => {
  const { pathname } = useLocation();
  const articleId = pathname.split('/')[2];

  const article = useAppSelector(state =>
    state.articles.articles.find(article => article.id === +articleId)
  );

  return <div>ArticlePage</div>;
};
