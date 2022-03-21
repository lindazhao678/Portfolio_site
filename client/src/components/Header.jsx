import React from "react";
import { useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header({ projectsRef, aboutRef, contactRef }) {
  const location = useLocation().pathname;
  function scroll(ref) {
    window.scrollTo(0, ref.current.offsetTop);
  }
  return (
      <div className="navbar">
        <div className="row container mx-auto">
          <div className="col-3">
            <a className={location === "/" && "active"} href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </div>

          <div className="nav col-6 d-flex justify-content-center">
            <ul>
              <li>
                <Link to="#" className={location === "/" && "active"} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className={location === "/projects" && "active"} onClick={() => scroll(projectsRef)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="#" className={location === "/about" && "active"} href="/about" onClick={() => scroll(aboutRef)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className={location === "/contact" && "active"} href="/contact" onClick={() => scroll(contactRef)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav-link-icon col-3 text-end">
            <Link to="#" className="contact-link">
              <FaLinkedin className="me-5 " />
            </Link>
            <Link to="#" className="contact-link">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Header;
