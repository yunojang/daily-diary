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

export const getNextMonth = (date) => {
  const now = date.getMonth();
  const newDate = new Date(date);

  newDate.setMonth(now + 1);
  return newDate;
};

export const getPrevMonth = (date) => {
  const now = date.getMonth();
  const newDate = new Date(date);

  newDate.setMonth(now - 1);
  return newDate;
};

export const createDateKey = (date) => {
  return (
    String(date.getFullYear()) +
    String(date.getMonth() + 1) +
    String(date.getDate())
  );
};

export const getFirstDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  return new Date(year, month, 1);
};

export const getLastDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  return new Date(year, month + 1, 0);
};
