import React from "react";
import axios from "axios";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  initializeCountries,
  search,
} from "../features/countries/countriesSlice";
import styles from "./CountriesList.module.css";
import CountryCard from "./CountryCard";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";

const CountriesList = () => {
  // const [countries, setCountries] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [searchBox, setSearchBox] = useState("");

  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);
  const searchInput = useSelector((state) => state.countries.search);

  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);
  console.log(countriesList);

  //   countries.filter((languages) => {
  //     console.log(languages);
  //   });
  const searchfunc = (e) => {
    dispatch(search(e.target.value));
  };

  return (
    <div>
      {/* <h4>Search for recipe</h4> */}
      {/* <form className={styles.containerSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="search"
          onChange={search}
        />
      </form> */}
      <Form.Group
        className="mb-1 col-md-8 offset-md-2"
        controlId="formBasicText"
        style={{
          width: "26rem",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <Form.Control
          type="text"
          name="search"
          placeholder="Search..."
          className="search"
          onChange={searchfunc}
        />
        <Form.Text className="text-muted">
          Search your location for detail info.
        </Form.Text>
      </Form.Group>

      <div className={styles.countriesList}>
        {!loading ? (
          countriesList &&
          countriesList
            .filter((country) => {
              if (
                country.name.common
                  .toLowerCase()
                  .includes(searchInput.toLowerCase().trim())
              ) {
                return country;
              }
            })
            .map((country) => {
              return (
                <CountryCard key={country.name.common} country={country} />
              );
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

export default CountriesList;
