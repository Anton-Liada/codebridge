import { IArticle } from '../types/types';

export const formattedDate = (date: string) => {
  const currentDate = new Date(date).toLocaleString('en', {
    dateStyle: 'long',
  });

  const splitedDate = currentDate.split(',');

  return `${splitedDate[0]}th, ${splitedDate[1]}`;
};

export const shortenedText = (string: string, maxLength: number) => {
  return string.length > maxLength
    ? `${string.slice(0, maxLength)}...`
    : string;
};

export const filterdText = (text: string, values: string) => {
  return text.toLowerCase().includes(values.toLowerCase());
};

export const filteredArticles = (articles: IArticle[], value: string) => {
  const filteredByTitle = articles.filter(({ title }) =>
    filterdText(title, value)
  );

  const filteredBySummary = articles.filter(({ summary }) =>
    filterdText(summary, value)
  );

  return [...new Set([...filteredByTitle, ...filteredBySummary])];
};
