export const getNextDate = (date) => {
  const now = date.getDate();
  const newDate = new Date(date);

  newDate.setDate(now + 1);

  return newDate;
};

export const getPrevDate = (date) => {
  const now = date.getDate();
  const newDate = new Date(date);

  newDate.setDate(now - 1);

  return newDate;
};

export const createDateKey = (date) => {
  return (
    String(date.getFullYear()) +
    String(date.getMonth() + 1) +
    String(date.getDate())
  );
};
