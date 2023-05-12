import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../assets/css/nav.css";

function BasicExample() {
  return (
    <>
      <Navbar
        style={{
          backgroundColor: "#292827",
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
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
            <Navbar.Brand>
              <span className="d-none d-sm-block" style={{ color: "white" }}>
                Robert's Department Store
                <br />
                <small>Since 1931</small>
              </span>
              <span className="d-block d-sm-none">Robert's Dept. Store</span>
            </Navbar.Brand>
          </Link>
        </Container>
        <Form className="d-flex" style={{ marginRight: "1em" }}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      <Navbar
        style={{
          backgroundColor: "#D8DBDE",
          fontFamily: "Inter",
          fontSize: "1em",
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
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
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
                Hi-Vis Clothing
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
              <Link
                to="/Brands"
                style={{
                  textDecoration: "none",
                  fontSize: "1em",
                  marginRight: "1rem",
                  color: "black",
                }}>
                Store Info
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;
