import React, { useCallback, useState } from 'react';
import './HomePage.scss';
import { CardList } from '/src/components/cardList';
import { Filter } from '/src/components/filter';
import { useAppSelector } from '/src/features/hooks/hooks';
import { filteredArticles } from '/src/helpers/helpers';

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

  value ? (content = filteredArticles(articles, value)) : (content = articles);

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
