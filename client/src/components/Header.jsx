import React from "react";
import { useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const location = useLocation().pathname;
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
                <Link to="/" className={location === "/" && "active"} >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className={location === "/projects" && "active"}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className={location === "/about" && "active"}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className={location === "/contact" && "active"}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav-link-icon col-3 text-end">
            <Link to="#" className="contact-link">
              <FaLinkedin className="me-5" />
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
