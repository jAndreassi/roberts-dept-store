import * as React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

function DefaultExample() {
  return (
    <>
      <div>
        <hr></hr>
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
                {" "}
                <FaFacebook size={30} />{" "}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <ListGroup>
          <ListGroup.Item>About Us</ListGroup.Item>
          <ListGroup.Item>
            Hours:<br></br> Monday through Friday 9 am to 6:30 pm<br></br>{" "}
            Saturday 9 am to 6 pm<br></br>
            Sunday 11 am to 4 pm
          </ListGroup.Item>
          <ListGroup.Item>
            <Link
              to={{
                pathname: "https://www.google.com/maps/dir/",
                search:
                  "?api=1&destination=342+Mamaroneck+Ave%2C+Mamaroneck+NY+10543",
              }}
              target="_blank"
              style={{ color: "inherit", textDecoration: "none" }}>
              <i className="bi bi-geo-alt-fill"></i> 342 Mamaroneck Ave,
              Mamaroneck NY 10543
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaEnvelope />{" "}
            <a
              href="mailto:info@robertsdeptstore.com"
              style={{ color: "inherit", textDecoration: "none" }}>
              info@robertsdeptstore.com
            </a>
          </ListGroup.Item>
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
