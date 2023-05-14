import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import shirt1 from "../assets/images/saltlife.jpeg";
import shirt2 from "../assets/images/columbia.jpeg";

function BasicExample() {
  return (
    <div style={{ paddingTop: "2em", paddingBottom: "10em" }}>
      <Card>
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Figure className="m-0">
            <Figure.Image width={171} height={180} alt="Shirt 1" src={shirt1} />
            <Figure.Caption className="text-center">Saltlife</Figure.Caption>
          </Figure>
          <span className="mx-auto" style={{ fontSize: "5em" }}>
            Socks! Belts! Gloves! Hats!
          </span>
          <Figure className="m-0">
            <Figure.Image width={171} height={180} alt="Shirt 2" src={shirt2} />
            <Figure.Caption className="text-center">Columbia</Figure.Caption>
          </Figure>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
