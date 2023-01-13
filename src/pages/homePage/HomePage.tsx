import React, { useCallback, useState } from 'react';
import { CardList } from '../../components/cardList';
import { Filter } from '../../components/filter';
import { useAppSelector } from '../../features/hooks/hooks';
import { filteredArticles } from '../../helpers/helpers';
import './homePage.scss';

export const HomePage: React.FC = () => {
  const [value, setValue] = useState('');
  const articles = useAppSelector(state => state.articles.articles);

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value.trimStart());
    },
    []
  );

  let content;

  (value)
  ? (content = filteredArticles(articles, value))
  : (content = articles);

  return (
    <div className="home-page">
      <div className="container">
        <Filter
          onChange={onChangeInput}
          amountOfArticles={content.length}
          value={value}
        />

        <CardList articles={content} value={value} />
      </div>
    </div>
  );
};
