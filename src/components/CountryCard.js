import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import styles from "./CountryCard.module.css";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItem, favoritesSlice } from "../features/favorites/favoritesSlice";
import { removeItem } from "../features/favorites/favoritesSlice";
import { useState } from "react";
import { HeartSwitch } from "@anatoliygatt/heart-switch";

const CountryCard = ({ country, value }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const favoritesList = useSelector((state) => state.favorites.favorites);

  useEffect(() => {}, [checked]);

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

  const isFav = favoritesList.find((item) => item.cca3 === country.cca3);

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
      {!isFav && (
        <HeartSwitch
          size="md"
          inactiveTrackFillColor="#cffafe"
          inactiveTrackStrokeColor="#22d3ee"
          activeTrackFillColor="red"
          activeTrackStrokeColor="red"
          inactiveThumbColor="#ecfeff"
          activeThumbColor="#ecfeff"
          checked={checked}
          onChange={(event) => {
            setChecked(event.target.checked);
            dispatch(addItem(country));
            // window.location.reload(false);
          }}
        />
      )}

      {isFav && (
        <HeartSwitch
          size="md"
          inactiveTrackFillColor="#cffafe"
          inactiveTrackStrokeColor="#22d3ee"
          activeTrackFillColor="red"
          activeTrackStrokeColor="red"
          inactiveThumbColor="#ecfeff"
          activeThumbColor="#ecfeff"
          checked={!checked}
          onChange={(event) => {
            setChecked(event.target.checked);
            dispatch(removeItem(country));
            /*             window.location.reload(false);
             */
          }}
        />
      )}
      {/* {!isFav && (
        <button
          onClick={() => {
            dispatch(addItem(country)); //setIsLiked(true));
          }}
        >
          Add
        </button>
      )}
      :
      {isFav && (
        <button
          onClick={() => {
            dispatch(removeItem(country));
          }}
        >
          Remove
        </button>
      )} */}
    </Card>
  );
};

export default CountryCard;
