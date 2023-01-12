import { IArticle } from '../types/types';

export const formattedDate = (date: string) => {
  const currentDate = new Date(date).toLocaleString('en', {
    dateStyle: 'long',
  });

  const formatDate = `${currentDate.split(',')[0]}th, ${
    currentDate.split(',')[1]
  }`;

  return formatDate;
};

export const shortenedText = (string: string, maxLength: number) => {
  return string.length > maxLength
    ? `${string.slice(0, maxLength)}...`
    : string;
};

export const filteredArticles = (articles: IArticle[], value: string) => {
  return articles.filter(({ title, summary }) => {
    const filteredTitle = title.toLowerCase().includes(value.toLowerCase());
    const filterdSummary = summary.toLowerCase().includes(value.toLowerCase());

    return filteredTitle || filterdSummary;
  });
};
