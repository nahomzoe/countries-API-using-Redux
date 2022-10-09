import React, { useEffect, useState } from "react";

import axios from "axios";

import {
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
  MDBCardImage,
} from "mdb-react-ui-kit";

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${64}&lon=${26}&units=metric&APPID=541aece78bd35a3a6081afb94884efc2`
      )
      .catch((error) => console.log(error))
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      });
  }, []);

  return (
    <div style={{ marginTop: "10rem", marginBottom: "10rem" }}>
      <MDBContainer
        className="h-100"
        className="vh-20"
        style={{ backgroundColor: "white", marginTop: "2rem" }}
      >
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10" lg="8" xl="6">
            <MDBCard
              className="bg-dark text-white"
              style={{ borderRadius: "40px" }}
            >
              <div className="bg-image" style={{ borderRadius: "35px" }}>
                <MDBCardImage
                  src="https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2824&q=80"
                  className="card-img"
                  alt="weather"
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
                ></div>
              </div>
              <div className="card-img-overlay text-dark p-5">
                <div className="display-2 my-3">
                  {weather && <h1>Weather : {weather.main.temp}</h1>}
                </div>
                <p className="mb-2">
                  Feels Like: {weather && weather.main.feels_like}
                </p>
                <MDBTypography tag="h5">
                  {weather && weather.weather[0].main}
                </MDBTypography>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default WeatherCard;
