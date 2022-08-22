import React from "react";

import { Link } from "react-router-dom";
import styles from "./CountryCard.module.css";

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
    <div className={styles.card}>
      <img src={flags.png} alt="flag" />
      <h3>{name.common}</h3>
      <h4>State name</h4>
      <div className="flex">
        <div>
          <ul>
            {Object.values(languages || {}).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {Object.values(currencies || {}).map((cur) =>
              typeof cur !== "object" ? "" : <li key={cur.name}>{cur.name}</li>
            )}
            ;
          </ul>
        </div>
        <p>{population}</p>
      </div>
      <Link
        to={{
          pathname: `/countriesList/${cca3}`,
        }}
        state={country}
      >
        See More
      </Link>
    </div>
  );
};

export default CountryCard;
