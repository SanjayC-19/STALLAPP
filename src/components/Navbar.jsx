import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarImg from "../assets/Navbar.jpg";
import "../index.css";

const GoogleFormButton = () => {
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSdlwnhxIrfp5GNtnZNYSLkzS8w7uPIZus09TZGRCUSQz-BaoQ/viewform?usp=header"; // Replace with your actual Google Form link

  return (
    <a
      href={formLink}
      target="_blank"
      rel="noopener noreferrer"
      className="pre-order-button pre-margin px-6 py-3 text-white bg-gradient-to-r from-red-500 to-yellow-500 rounded-full hover:from-red-600 hover:to-yellow-600 transition duration-300 shadow-lg font-semibold text-lg tracking-wide border-2 border-white"
    >
      Pre Order
    </a>
  );
};

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
          <GoogleFormButton />
           
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;