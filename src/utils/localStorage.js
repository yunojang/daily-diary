export const saveLS = (keyName, value) => {
  localStorage.setItem(keyName, JSON.stringify(value));
};

export const loadLS = (keyName) => {
  const data = localStorage.getItem(keyName);

  if (!data) {
    console.error(`'${keyName}' is not valid key`);
    return null;
  }

  return JSON.parse(data);
};

export const keyName = {
  diary: "diary",
};
