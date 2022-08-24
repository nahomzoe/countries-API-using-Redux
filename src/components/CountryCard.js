import React from "react";

import { Link } from "react-router-dom";
import styles from "./CountryCard.module.css";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";

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
        <div>
          <ListGroup variant="flush">
            {Object.values(languages || {}).map((language) => (
              <ListGroup.Item key={language}>{language}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div>
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
        </div>
        <div>{population}</div>
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
    </Card>
  );
};

export default CountryCard;
