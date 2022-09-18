import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CountryCard from "./CountryCard";
import styles from "./FavList.module.css";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
// import { initializeFavorites } from "../features/favorites/favoritesSlice";
// import { useEffect } from "react";

const FavList = () => {
  const dispatch = useDispatch();
  const favoritesList = useSelector((state) => state.favorites.favorites);
  const loading = useSelector((state) => state.favorites.isLoading);

  // useEffect(() => {
  //   dispatch(initializeFavorites());
  // }, [dispatch]);

  console.log(favoritesList);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Favorite List</h1>
      <div className={styles.favList}>
        {!loading ? (
          favoritesList &&
          favoritesList.map((country) => {
            return <CountryCard key={country.name.common} country={country} />;
          })
        ) : (
          <div>
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </Button>{" "}
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavList;
