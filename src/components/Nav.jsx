import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white",
          fontFamily: "Inter",
          fontSize: "1.2em",
        }}
        expand="lg">
        <Container>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              marginRight: "2rem",
            }}>
            <Navbar.Brand>
              <span className="d-none d-sm-block">
                Robert's Department Store
                <br />
                <small>Since 1931</small>
              </span>
              <span className="d-block d-sm-none">Robert's Dept. Store</span>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
      <Navbar
        style={{
          backgroundColor: "#D8DBDE",
          fontFamily: "Inter",
          fontSize: "1.2em",
        }}
        expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center">
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
              <Link
                to="/Brands"
                style={{
                  textDecoration: "none",
                  fontSize: "1em",
                  marginRight: "1rem",
                  color: "black",
                }}>
                Brands
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;
