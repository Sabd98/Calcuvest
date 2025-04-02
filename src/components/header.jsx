import React from "react";
import logo from "../assets/investor-logo.png";

export const Header = () => {
  return (
    <header id="header" className="flex flex-col items-center">
      <h1 className="font-['Roboto Condensed'] font-bold">My Investment Calculator</h1>
      <img src={logo} alt="invest-logo" />
    </header>
  );
};


