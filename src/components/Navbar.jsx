import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarImg from "../assets/Navbar.jpg";
import "../index.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container d-flex justify-content-center align-items-center">
        {/* Logo */}
        <a className="navbar-brand me-auto" href="#homesection">
          <img
            src={NavbarImg}
            className="food-munch-logo"
            alt="Food Munch Logo"
          />
        </a>

        {/* Centered Brand Text */}
        <div className="text-center flex-grow-1">
          <h1 className="navbar-brand m-0">K-Square - Mark Antony</h1>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" href="#wcuSection">
              Why Choose Us? <span className="visually-hidden">(current)</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
