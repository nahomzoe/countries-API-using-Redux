const getAll = () => {
  const response = JSON.parse(localStorage.getItem("favorites"));
  // JSON.parse(response);
  if (!response) {
    response = [];
  }
  return response;
};

export default getAll;
