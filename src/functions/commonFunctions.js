export const getDifferenceOfDays = start => {
  const date1 = start;
  const date2 = new Date();

  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = date2.getTime() - date1.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
};

export const randomRating = () => Math.floor(Math.random() * (5 - 1) + 1);
