export const formattedDate = (date: string) => {
  const currentDate = new Date(date).toLocaleString('en', {
    dateStyle: 'long',
  });

  const formatDate = `${currentDate.split(',')[0]}th, ${
    currentDate.split(',')[1]
  }`;

  return formatDate;
};
