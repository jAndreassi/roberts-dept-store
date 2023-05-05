import * as React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function DefaultExample() {
  return (
    <>
      <div>
        <div style={{ paddingBottom: "2em" }}>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link
                href="/home"
                style={{ color: "inherit", textDecoration: "none" }}>
                <FaInstagram size={30} />{" "}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                style={{ color: "inherit", textDecoration: "none" }}>
                <FaFacebook size={30} />{" "}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <ListGroup>
          <ListGroup.Item>About Us</ListGroup.Item>
          <ListGroup.Item>
            Hours:<br></br> Monday through Friday 9am to 6:30pm<br></br>{" "}
            Saturday 9am to 6pm<br></br>
            Sunday 11am to 4pm
          </ListGroup.Item>
          <ListGroup.Item>
            342 Mamaroneck Ave, Mamaroneck NY 10543
          </ListGroup.Item>
          <ListGroup.Item>info@robertsdeptstore.com</ListGroup.Item>
          <ListGroup.Item>
            <a
              href="tel:9146980969"
              style={{ color: "inherit", textDecoration: "none" }}>
              <i className="bi bi-phone"></i> (914) 698-0969
            </a>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}

export default DefaultExample;
