import React from "react";
import { useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header({ projectsRef }) {
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
                <a className={location === "/" && "active"} href="/">
                  Home
                </a>
              </li>
              <li>
                <Link
                  className={location === "/projects" && "active"}
                  to="#"
                  onClick={() => scroll(projectsRef)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <a className={location === "/about" && "active"} href="/about">
                  About
                </a>
              </li>
              <li>
                <a
                  className={location === "/contact" && "active"}
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-link-icon col-3 text-end">
            <a href="#" className="contact-link">
              <FaLinkedin className="me-5 " />
            </a>
            <a href="#" className="contact-link">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
  );
}

export default Header;
