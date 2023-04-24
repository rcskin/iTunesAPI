//Header component
//import react and logo
import React from "react";
import Logo from "../ituneslogo.png";

const Header = () => {
  return (
    <div className="header-container">
      <h1>iTunes Media Search</h1>
      <img src={Logo} alt="itunes logo"></img>
      <h4>Search for your favorite media using this iTunes app!</h4>
    </div>
  );
};

export default Header;
