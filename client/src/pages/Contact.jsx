import React from "react";

import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
function Contact() {
  return (
      <div className="contact-section">

        <div className="container">
          <h1 className="text-light px-5 pt-5">CONTACT ME</h1>
          <div className="contact-icon d-flex text-center justify-content-center">
            <a href="#" className="contact-link">
              <FaLinkedin className="col-4 contact-link-icon" />
            </a>
            <a href="#" className="contact-link">
              <FaGithub className="col-4 contact-link-icon" />
            </a>
            <a href="#" className="contact-link">
              <FaTwitterSquare className="col-4 contact-link-icon" />
            </a>
          </div>
        </div>

      </div>
  );
}

export default Contact;
