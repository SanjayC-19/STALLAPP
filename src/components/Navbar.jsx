import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#homesection">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
            className="food-munch-logo"
            alt="Food Munch Logo"
          />
        </a>

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
            <a className="nav-link active" href="#FollowUs">Follow Us
              <span className="visually-hidden">(current)</span>
              </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
