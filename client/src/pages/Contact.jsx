import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaRocket,
} from "react-icons/fa";

function Contact({ contactRef }) {
  return (
    <div className="contact-section clearfix" ref={contactRef}>
      <h1 className="text-center text-light py-5">CONTACT</h1>
      <div className="d-flex row pb-5">
        <h2 className="contact-text text-light text-center col-12">
          If you like my site or my works
        </h2>
        <h2 className="contact-text text-light text-center col-12">
          Or if you have any questions
        </h2>
        <h2 className="contact-text text-light text-center col-12">
          Don't hesitate to reach out!
        </h2>
        <div className="text-light text-center">
          <FaRocket />
          <FaRocket />
          <FaRocket />
        </div>
      </div>
      <div className="down-arrow bounce text-light pb-3">
        <FaArrowDown />
      </div>
      <div className="pb-3 d-flex justify-content-center align-items-baseline">
        <h5 className="text-light text-end col-4">MESSAGE ME</h5>
        <a
          href="mailto:lindazhao678@gmail.com"
          className="col-4 contact-link-icon px-5"
        >
          <FaEnvelope />
        </a>
      </div>
      <div className="pb-5 d-flex justify-content-center align-items-baseline">
        <h5 className="text-light text-end col-4">FOLLOW ME</h5>
        <div className="col-4">
          <a
            href="https://www.linkedin.com/in/linda-zhao-930b47124/"
            className="contact-link-icon px-5"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/lindazhao678"
            className="contact-link-icon contact-git-icon"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <hr className="m-0 text-light" />
    </div>
  );
}

export default Contact;
