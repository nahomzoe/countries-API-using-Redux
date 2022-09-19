const getAll = () => {
  const response = JSON.parse(localStorage.getItem("favorites"));

  if (!response) {
    return [];
  }
  return response;
};

export default getAll;
