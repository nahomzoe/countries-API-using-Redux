const getAll = () => {
  const response = JSON.parse(localStorage.getItem("favorites"));
  // JSON.parse(response);
  if (!response) {
    return [];
  }
  return response;
};

export default getAll;
