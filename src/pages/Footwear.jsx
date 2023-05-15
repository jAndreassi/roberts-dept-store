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
            Footwear!
          </span>
          <Figure className="m-0">
            <Figure.Image width={171} height={180} alt="Shirt 2" src={boot2} />
            <Figure.Caption className="text-center">Wolverine</Figure.Caption>
          </Figure>
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-center">
        <Button style={{ background: "#133955" }} className="m-2">
          Workboots
        </Button>
        <Button style={{ background: "#133955" }} className="m-2">
          Sneakers
        </Button>
        <Button style={{ background: "#133955" }} className="m-2">
          Dress Shoes
        </Button>
        <Button style={{ background: "#133955" }} className="m-2">
          Casual Shoes
        </Button>
        <Button style={{ background: "#133955" }} className="m-2">
          Sandals
        </Button>
        <Button style={{ background: "#133955" }} className="m-2">
          Slippers
        </Button>
        <Button style={{ background: "#133955" }} className="m-2">
          Hiking Boots
        </Button>
      </div>
    </div>
  );
}

export default BasicExample;
