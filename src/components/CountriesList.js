import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./CountriesList.module.css";
import CountryCard from "./CountryCard";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchBox, setSearchBox] = useState("");

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
  const search = (e) => {
    setSearchBox(e.target.value);
  };

  return (
    <div className={styles.recipeList}>
      <h4>Search for recipe</h4>

      <form className="container-search">
        <input
          type="text"
          name="search"
          placeholder="Search.."
          className="search"
          onChange={search}
        />
      </form>

      {!loading ? (
        countries &&
        countries
          .filter((country) => {
            if (
              country.name.common
                .toLowerCase()
                .includes(searchBox.toLowerCase().trim())
            ) {
              return country;
            }
          })
          .map((country) => {
            return <CountryCard key={country.name.common} country={country} />;
          })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CountriesList;
