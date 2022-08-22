import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./CountriesList.module.css";
import CountryCard from "./CountryCard";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .catch((error) => console.log(error))
      .then((res) => {
        console.log(res.data);
        setCountries(res.data);
        setLoading(false);
      });
  }, []);
  //   countries.filter((languages) => {
  //     console.log(languages);
  //   });

  return (
    <div className={styles.recipeList}>
      {!loading ? (
        countries.map((country) => {
          return <CountryCard key={country.name.common} country={country} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CountriesList;
