import React from "react";
import {
  Container, Nav,
  Navbar
} from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const location = useLocation().pathname;
  return (
    <Navbar expand="lg" bg="navbar">
      <Container fluid>
        <Navbar.Brand href="/">
          <img className="navbar-logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/" className={location === "/" && "active"}>
              Home
            </Nav.Link>
            <Nav.Link href="/projects" className={location === "/projects" && "active"}>
              Projects
            </Nav.Link>
            <Nav.Link href="/about" className={location === "/about" && "active"}>
              About
            </Nav.Link>
            <Nav.Link href="/contact" className={location === "/contact" && "active"}>
              Contact
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            <Navbar.Brand href="#" className="me-5">
              <FaLinkedin />
            </Navbar.Brand>
            <Navbar.Brand href="#">
              <FaGithub />
            </Navbar.Brand>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
