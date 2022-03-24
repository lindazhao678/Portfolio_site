import React from "react";
import { Link } from "react-router-dom";

import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
function Contact({contactRef}) {
  return (
      <div className="contact-section" ref={contactRef}>

        <div className="container pb-3">
          <h1 className="text-light px-5 pt-3">CONTACT ME</h1>
          <div className="contact-icon d-flex text-center justify-content-center">
            <Link to="#" className="contact-link">
              <FaLinkedin className="col-4 contact-link-icon" />
            </Link>
            <Link to="#" className="contact-link">
              <FaGithub className="col-4 contact-link-icon" />
            </Link>
            <Link to="#" className="contact-link">
              <FaTwitterSquare className="col-4 contact-link-icon" />
            </Link>
          </div>
        </div>

      </div>
  );
}

export default Contact;
