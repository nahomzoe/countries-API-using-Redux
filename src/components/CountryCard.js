import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/favorites/favoritesSlice";
import { removeItem } from "../features/favorites/favoritesSlice";
import { useState } from "react";
import { HeartSwitch } from "@anatoliygatt/heart-switch";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBCardTitle,
  MDBCardSubTitle,
} from "mdb-react-ui-kit";

const CountryCard = ({ country, value }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const favoritesList = useSelector((state) => state.favorites.favorites);

  useEffect(() => {
    setChecked();
  }, [checked]);

  const { name, capital, languages, population, cca3, flags } = country;

  const isFav = favoritesList.find((item) => item.cca3 === country.cca3);

  return (
    // <Card
    //   className={styles.Card}
    //   style={{ width: "18rem", backgroundColor: "white" }}
    // >
    //   <Card.Img
    //     src={flags.png}
    //     alt="flag"
    //     style={{ width: "5rem", height: "2.5rem", float: "right" }}
    //   />
    //   <Card.Title style={{ fontSize: "1.5rem" }}>{name.common}</Card.Title>
    //   <h6>{capital}</h6>
    //   <div className="flex">
    //     <ListGroup variant="flush">
    //       {Object.values(languages || {}).map((language) => (
    //         <ListGroup.Item key={language}>{language}</ListGroup.Item>
    //       ))}
    //     </ListGroup>

    //     <ListGroup variant="flush">
    //       {Object.values(currencies || {}).map((cur) =>
    //         typeof cur !== "object" ? (
    //           ""
    //         ) : (
    //           <ListGroup.Item key={cur.name}>{cur.name}</ListGroup.Item>
    //         )
    //       )}
    //     </ListGroup>

    //     {population}
    //   </div>
    //   <Link
    //     to={{
    //       pathname: `/countriesList/${cca3}`,
    //     }}
    //     state={country}
    //     variant="primary"
    //   >
    //     See More
    //   </Link>
    //   {!isFav && (
    //     <HeartSwitch
    //       size="md"
    //       inactiveTrackFillColor="#cffafe"
    //       inactiveTrackStrokeColor="#22d3ee"
    //       activeTrackFillColor="red"
    //       activeTrackStrokeColor="red"
    //       inactiveThumbColor="#ecfeff"
    //       activeThumbColor="#ecfeff"
    //       checked={checked}
    //       onChange={(event) => {
    //         setChecked(event.target.checked);
    //         dispatch(addItem(country));
    //         // window.location.reload(false);
    //       }}
    //     />
    //   )}

    //   {isFav && (
    //     <HeartSwitch
    //       size="md"
    //       inactiveTrackFillColor="#cffafe"
    //       inactiveTrackStrokeColor="#22d3ee"
    //       activeTrackFillColor="red"
    //       activeTrackStrokeColor="red"
    //       inactiveThumbColor="#ecfeff"
    //       activeThumbColor="#ecfeff"
    //       checked={!checked}
    //       onChange={(event) => {
    //         setChecked(event.target.checked);
    //         dispatch(removeItem(country));
    //         /*             window.location.reload(false);
    //          */
    //       }}
    //     />
    //   )}
    //   {/* {!isFav && (
    //     <button
    //       onClick={() => {
    //         dispatch(addItem(country)); //setIsLiked(true));
    //       }}
    //     >
    //       Add
    //     </button>
    //   )}
    //   :
    //   {isFav && (
    //     <button
    //       onClick={() => {
    //         dispatch(removeItem(country));
    //       }}
    //     >
    //       Remove
    //     </button>
    //   )} */}
    // </Card>

    <MDBCard>
      <MDBCardImage src={flags.png} alt="flag" position="top" />
      <MDBCardBody>
        <MDBCardTitle>
          <span>Country</span>
          <span style={{ float: "right" }}>{name.common}</span>
        </MDBCardTitle>
        <hr />
        <MDBCardSubTitle>
          <span>Capital</span>
          <span style={{ float: "right" }}>{capital}</span>
        </MDBCardSubTitle>
        <hr />
        <MDBCardText>
          <span className="text-start">Population</span>
          <span className="text-end" style={{ float: "right" }}>
            {population}
          </span>
        </MDBCardText>
        <hr />
        <MDBCardText>
          <span className="text-start">Language</span>
          <span style={{ float: "right" }}>
            {Object.values(languages || {}).find((language) => (
              <span key={language}>
                <p>{language[0]} </p>
              </span>
            ))}
          </span>
        </MDBCardText>
        <hr />

        {!isFav && (
          <HeartSwitch
            size="sm"
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
            }}
          />
        )}
        {isFav && (
          <HeartSwitch
            size="sm"
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
            }}
          />
        )}

        <Link
          href="#"
          style={{
            float: "right",
            textDecoration: "none",
            color: "Orange",
          }}
          to={{
            pathname: `/countriesList/${cca3}`,
          }}
          state={country}
          variant="primary"
        >
          See more
        </Link>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CountryCard;
