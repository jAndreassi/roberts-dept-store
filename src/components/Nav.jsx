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
        <Link to="/">
        <Navbar.Brand>
          <span className="d-none d-sm-block">Robert's Department Store</span>
          <span className="d-block d-sm-none">Robert's Dept. Store</span>
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Footwear</Nav.Link>
            <Nav.Link href="#link">Clothing</Nav.Link>
            <Nav.Link href="#link">Accessories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
