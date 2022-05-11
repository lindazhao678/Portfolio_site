import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

function Header() {
  return (
    <Navbar className="top-nav" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img className="nav-logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/" className="active">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <div className="d-flex">
            <Navbar.Brand
              href="mailto:lindazhao678@gmail.com"
              className="nav-contact me-lg-5"
            >
              <FaEnvelope />
            </Navbar.Brand>
            <Navbar.Brand
              href="https://www.linkedin.com/in/linda-zhao-930b47124/"
              className="nav-contact me-lg-5"
            >
              <FaLinkedin />
            </Navbar.Brand>
            <Navbar.Brand
              href="https://github.com/lindazhao678"
              className="nav-contact"
            >
              <FaGithub />
            </Navbar.Brand>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
