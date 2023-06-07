import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar flex-box">
        <Link to="/">
          <img class="logo-img" src="/images/logoColor.png" alt="Logo" />
        </Link>
        <Link to="/">
          <p className="list-item">HOME</p>
        </Link>

        <Link to="/menu">
          <p className="list-item">MENU</p>
        </Link>
        <Link to="/cart">
          <p className="list-item">CART</p>
        </Link>
        <Link to="/">
          <p className="list-item">CONTACT</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
