import React, { useCallback, useMemo, useState } from 'react';
import './HomePage.scss';
import { CardList } from '/src/components/cardList';
import { Filter } from '/src/components/filter';
import { useAppSelector } from '/src/features/hooks/hooks';

export const HomePage: React.FC = () => {
  const [value, setValue] = useState('');
  const articles = useAppSelector(state => state.articles.articles);

  const onChangeInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.trimStart());
  }, []);

  const filteredArticles = useMemo(() => {
    return articles.filter(({ title, summary }) => {
      const filteredTitle = title.toLowerCase().includes(value.toLowerCase());
      const filterdSummary = summary.toLowerCase().includes(value.toLowerCase());

      return filteredTitle || filterdSummary;
    });
  }, [value, articles]);

  let content;

  (value)
    ? content = filteredArticles
    : content = articles;

  return (
    <div className="home-page">
      <div className="container">
        <Filter
          onChange={onChangeInput}
          amountOfArticles={content.length}
          value={value}
        />

        <CardList
          articles={content}
          value={value}
        />
      </div>
    </div>
  );
};
