import React from "react";
import logo from "../assets/logo.svg";
const Navbar = ({ handleFlag }) => {
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <img className="logo" src={logo} alt="logo" />
          <div className="location">
            <span className="city"> Pune</span>
            <span className="state">Maharashtra, India</span>
          </div>
          <div className="navbar-options">
            <div className="navbar-option" onClick={handleFlag}>
              <span className="material-icons"> person_outline</span> Add
              Restaurent
            </div>
            <div className="navbar-option">
              <span className="material-icons">shopping_bag</span> Cart
            </div>
            <div className="navbar-option">
              <span className="material-icons">support</span> Help
            </div>

            <div className="navbar-option">
              <span className="material-icons">search</span> Search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
