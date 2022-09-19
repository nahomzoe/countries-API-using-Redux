import React, { useEffect, useState } from "react";
import styles from "./SingleCountry.module.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { ListGroup } from "react-bootstrap";

const SingleCountry = () => {
  let location = useLocation();
  const { latlng, name, capital } = location.state;
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
    <div style={{ margin: "2rem" }}>
      <h1> {name.common}</h1>
      <Card
        style={{
          width: 1300,
          backgroundColor: "lightblue",
        }}
      >
        <CardContent>
          <Typography style={{ fontSize: 30 }} gutterBottom>
            {capital}
          </Typography>
          <Typography>
            {weather && (
              <h3 style={{ fontSize: 15 }}>Weather : {weather.main.temp}</h3>
            )}
          </Typography>

          <img
            src={`https://source.unsplash.com/featured/1600x900?${capital}`}
          ></img>

          <Typography variant="body2" component="p">
            {weather && (
              <ListGroup variant="flush">
                {Object.entries(weather.main || {}).map((ele, value) => (
                  <ListGroup.Item key={ele}>
                    {ele}
                    {value}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Stay Safe.....</Button>
        </CardActions>
      </Card>
    </div>
    // <div className={styles.recipe}>
    //   <>
    //     {weather && (
    //       <h3>
    //         The weather in {name.common} is {weather.main.temp}
    //       </h3>
    //     )}
    //     <h2>
    //       {latlng[0]},{latlng[1]},{name.common}
    //     </h2>
    //   </>
    // </div>
  );
};

export default SingleCountry;
