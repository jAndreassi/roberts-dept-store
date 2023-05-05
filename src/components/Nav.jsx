import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" style={{ textDecoration: "none", marginRight: "2rem" }}>
          <Navbar.Brand>
            <span className="d-none d-sm-block">Robert's Department Store</span>
            <span className="d-block d-sm-none">Robert's Dept. Store</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/Footwear"
              style={{
                textDecoration: "none",
                fontSize: "1em",

                marginRight: "1rem",
                color: "black",
              }}>
              Footwear
            </Link>

            <Link
              to="/Clothing"
              style={{
                textDecoration: "none",
                fontSize: "1em",
                marginRight: "1rem",
                color: "black",
              }}>
              Clothing
            </Link>

            <Link
              to="/Accessories"
              style={{
                textDecoration: "none",
                fontSize: "1em",
                marginRight: "1rem",
                color: "black",
              }}>
              Accessories
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
