import React from "react";
import logo from "../assets/investor-logo.png";
const Header = () => {
  return (
    <header id="header">
      <h1>My Investment Calculator</h1>
      <img src={logo} alt="invest-logo" />
    </header>
  );
};

export default Header;
