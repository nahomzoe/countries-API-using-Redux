import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCol,
  MDBCardTitle,
  MDBContainer,
  MDBRow,
  MDBTypography,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
} from "mdb-react-ui-kit";

const SingleCountry = () => {
  let location = useLocation();
  const { latlng, name, capital, country } = location.state;
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&units=metric&APPID=541aece78bd35a3a6081afb94884efc2`
      )
      .catch((error) => console.log(error))
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      });
  }, [latlng]);

  return (
    <div style={{ marginTop: "10rem", marginBottom: "10rem" }}>
      <MDBCard style={{ maxWidth: "1200px", margin: "auto" }}>
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage
              alt="capital city"
              style={{
                height: "20rem",
                width: "35rem",
                borderRadius: "9px",
              }}
              src={`https://source.unsplash.com/featured/1600x900?${capital}`}
              fluid
            />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle>{name.common}</MDBCardTitle>
              <MDBCardText>
                <span className="text-start">Weather</span>
                <span className="text-end" style={{ float: "right" }}>
                  {weather && weather.main.temp}
                </span>
              </MDBCardText>
              <hr />
              <MDBCardText>
                <span className="text-start">Weather</span>
                <span className="text-end" style={{ float: "right" }}>
                  {weather && weather.main.temp}
                </span>
              </MDBCardText>

              <MDBCardText></MDBCardText>
              <MDBCardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
      <section
        className="vh-20"
        style={{ backgroundColor: "white", marginTop: "2rem" }}
      >
        <MDBContainer className="h-100">
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
                  <MDBTypography tag="h4" className="mb-0">
                    {capital},{name.common}
                  </MDBTypography>
                  <p className="display-2 my-3">
                    {weather && <h1>Weather : {weather.main.temp}</h1>}
                  </p>
                  <p className="mb-2">
                    Feels Like:{" "}
                    {weather &&
                      Object.values(weather.main).filter((ele) => (
                        <span>{ele.feels_like}</span>
                      ))}
                  </p>
                  <MDBTypography tag="h5">Snowy</MDBTypography>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Link to={{ pathname: `/countriesList` }} state={{ country }}>
        <Button variant="primary">Back</Button>
      </Link>
    </div>
    // <div style={{ margin: "10rem" }}>
    //   <h1> {name.common}</h1>
    //   <Card
    //     style={{
    //       width: 1300,
    //       backgroundColor: "lightBlack",
    //     }}
    //   >
    //     <CardContent>
    //       <Typography style={{ fontSize: 30 }} gutterBottom>
    //         {capital}
    //       </Typography>
    //       <Typography>
    //         {weather && (
    //           <h3 style={{ fontSize: 15 }}>Weather : {weather.main.temp}</h3>
    //         )}
    //       </Typography>

    //       <img
    //         alt="capital city"
    //         style={{
    //           height: "15rem",
    //           width: "25rem",
    //           borderRadius: "9px",
    //           marginLeft: "4rem",
    //         }}
    //         src={`https://source.unsplash.com/featured/1600x900?${capital}`}
    //       ></img>

    //       <Typography variant="body2" component="p">
    //         {weather && (
    //           <ListGroup variant="flush">
    //             {Object.entries(weather.main || {}).map((ele, value) => (
    //               <ListGroup.Item key={ele}>
    //                 {ele}
    //                 {value}
    //               </ListGroup.Item>
    //             ))}
    //           </ListGroup>
    //         )}
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button size="small">Stay Safe.....</Button>
    //     </CardActions>
    //   </Card>
    //   <Link to={{ pathname: `/countriesList` }} state={{ country }}>
    //     <Button variant="primary">Back</Button>
    //   </Link>

    //   <section className="vh-100" style={{ backgroundColor: "#f5f6f7" }}>
    //     <MDBContainer className="h-100">
    //       <MDBRow className="justify-content-center align-items-center h-100">
    //         <MDBCol md="10" lg="8" xl="6">
    //           <MDBCard
    //             className="bg-dark text-white"
    //             style={{ borderRadius: "40px" }}
    //           >
    //             <div className="bg-image" style={{ borderRadius: "35px" }}>
    //               <MDBCardImage
    //                 src="https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2824&q=80"
    //                 className="card-img"
    //                 alt="weather"
    //               />
    //               <div
    //                 className="mask"
    //                 style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
    //               ></div>
    //             </div>
    //             <div className="card-img-overlay text-dark p-5">
    //               <MDBTypography tag="h4" className="mb-0">
    //                 {capital},{name.common}
    //               </MDBTypography>
    //               <p className="display-2 my-3">
    //                 {weather && <h1>Weather : {weather.main.temp}</h1>}
    //               </p>
    //               <p className="mb-2">
    //                 Feels Like:{" "}
    //                 {weather &&
    //                   Object.values(weather.main).filter((ele) => (
    //                     <span>{ele.feels_like}</span>
    //                   ))}
    //               </p>
    //               <MDBTypography tag="h5">Snowy</MDBTypography>
    //             </div>
    //           </MDBCard>
    //         </MDBCol>
    //       </MDBRow>
    //     </MDBContainer>
    //   </section>
    // </div>
  );
};

export default SingleCountry;
