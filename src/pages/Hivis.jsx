import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import boot1 from "../assets/images/wolverines/W03226.jpg";
import boot2 from "../assets/images/wolverines/W10315.jpg";

function BasicExample() {
  return (
    <div style={{ paddingTop: "2em", paddingBottom: "10em" }}>
      <Card>
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Figure className="m-0">
            <Figure.Image width={171} height={180} alt="Shirt 1" src={boot1} />
            <Figure.Caption className="text-center">Wolverine</Figure.Caption>
          </Figure>
          <span className="mx-auto" style={{ fontSize: "10em" }}>
            Hi-Vis Clothing!
          </span>
          <Figure className="m-0">
            <Figure.Image width={171} height={180} alt="Shirt 2" src={boot2} />
            <Figure.Caption className="text-center">Wolverine</Figure.Caption>
          </Figure>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Button variant="primary">Primary</Button>{" "}
          <Button variant="secondary">Secondary</Button>{" "}
          <Button variant="success">Success</Button>{" "}
          <Button variant="warning">Warning</Button>{" "}
          <Button variant="danger">Danger</Button>{" "}
          <Button variant="info">Info</Button>{" "}
          <Button variant="light">Light</Button>{" "}
          <Button variant="dark">Dark</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
