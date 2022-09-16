import React from "react";

import { Link } from "react-router-dom";
import styles from "./CountryCard.module.css";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/favorites/favoritesSlice";

const CountryCard = ({ country }) => {
  const {
    name,
    capital,
    languages,
    currencies,
    population,
    status,
    cca3,
    flags,
  } = country;
  const dispatch = useDispatch();
  const favoritesList = useSelector((state) => state.favorites.favorites);
  // const isFav = favoritesList.find((item) => item.id === country.id);

  return (
    <Card
      className={styles.Card}
      style={{ width: "18rem", backgroundColor: "white" }}
    >
      <Card.Img
        src={flags.png}
        alt="flag"
        style={{ width: "5rem", height: "2.5rem", float: "right" }}
      />

      <Card.Title style={{ fontSize: "1.5rem" }}>{name.common}</Card.Title>
      <h6>{capital}</h6>
      <div className="flex">
        <ListGroup variant="flush">
          {Object.values(languages || {}).map((language) => (
            <ListGroup.Item key={language}>{language}</ListGroup.Item>
          ))}
        </ListGroup>

        <ListGroup variant="flush">
          {Object.values(currencies || {}).map((cur) =>
            typeof cur !== "object" ? (
              ""
            ) : (
              <ListGroup.Item key={cur.name}>{cur.name}</ListGroup.Item>
            )
          )}
          ;
        </ListGroup>

        {population}
      </div>
      <Link
        to={{
          pathname: `/countriesList/${cca3}`,
        }}
        state={country}
        variant="primary"
      >
        See More
      </Link>
      <button
        onClick={() => {
          dispatch(addItem(country));
        }}
      >
        Love
        {/* {isFav ? "Love" : "Remove"} */}
      </button>
    </Card>
  );
};

export default CountryCard;
