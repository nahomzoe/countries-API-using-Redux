import React, { useEffect, useState } from "react";
import styles from "./SingleCountry.module.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SingleCountry = () => {
  let location = useLocation();
  const { latlng, name } = location.state;
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&units=metric&APPID=541aece78bd35a3a6081afb94884efc2`
      )
      .catch((error) => console.log(error))
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
        setLoading(false);
      });
  }, [latlng]);

  return (
    <div className={styles.recipe}>
      <>
        {weather && <h3>{weather.main.temp}</h3>}
        <h2>
          {latlng[0]},{latlng[1]},{name.common}
        </h2>
      </>
    </div>
  );
};

export default SingleCountry;
