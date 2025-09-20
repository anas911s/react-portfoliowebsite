import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export function Navigation() {
  return (
    <Navbar expand="lg" bg="light" className="shadow-sm py-3 fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-primary fs-4">
          Anas Amhaou
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto fw-semibold">
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-2">About</Nav.Link>
            <Nav.Link href="#projects" className="mx-2">Projects</Nav.Link>
            <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
