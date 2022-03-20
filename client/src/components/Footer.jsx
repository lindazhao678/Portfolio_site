import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer">
      <img src={logo} className="logo" alt="logo" />
      <span>Copyright &copy; {getCurrentYear()} Lijun Zhao</span>
    </div>
  );
}

export default Footer;
