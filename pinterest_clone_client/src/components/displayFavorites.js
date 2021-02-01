import React from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const DisplayFavorites = ({ favorites }) => {
  return (
    <div>
      <Container>
        <h1>Your Pins</h1>
        <br />
        {favorites.map((fav) => (
          // <Card style={{ width: "16em" }}>
          <Card.Img
            src={fav}
            alt=""
            style={{
              width: "16em",
              margin: "2em",
            }}
          />
          // </Card>
        ))}
      </Container>
    </div>
  );
};

export default DisplayFavorites;
