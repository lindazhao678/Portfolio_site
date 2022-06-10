import React from "react";
import logo from "../assets/logo.avif";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer">
      <img src={logo} className="footer-logo" alt="logo" />
      <span className="footer-text text-light">
        Copyright &copy; {getCurrentYear()} Lijun Zhao
      </span>
    </div>
  );
}

export default Footer;
