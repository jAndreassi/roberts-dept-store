import React from "react";
import Card from "react-bootstrap/Card";
import hero from "../assets/images/roberts.hero.jpg";

function BasicExample() {
  return (
    <div style={{ paddingTop: "2em", paddingBottom: "10em" }}>
      <Card>
        <Card.Img
          variant="top"
          src={hero}
          style={{ maxHeight: "600px", maxWidth: "500px" }}
        />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
