import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export function Navigation() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark shadow-sm py-3 fixed-top">
      <Container>
        {/* Brandnaam */}
        <Navbar.Brand href="#home" className="fw-bold text-info fs-4">
          Anas Amhaou
        </Navbar.Brand>

        {/* Toggle button (mobile) */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Links */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto fw-semibold">
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-2">Over mij</Nav.Link>
            <Nav.Link href="#projects" className="mx-2">Projecten</Nav.Link>
            <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Extra styling */}
      <style>{`
        .navbar-dark .navbar-nav .nav-link {
          color: #f8f9fa;
          transition: color 0.3s ease;
        }
        .navbar-dark .navbar-nav .nav-link:hover {
          color: #3abff8; /* zelfde blauw als footer iconen */
        }
        .navbar-dark .navbar-brand {
          color: #3abff8 !important; /* brandnaam blauw */
        }
      `}</style>
    </Navbar>
  );
}
