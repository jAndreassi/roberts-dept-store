import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Merrell from "../assets/images/merrell.logo.jpg";
function BasicExample() {
  return (
    <div style={{ padding: "3em" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Merrell} />
        <Card.Body>
          <Card.Title>Footwear</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
