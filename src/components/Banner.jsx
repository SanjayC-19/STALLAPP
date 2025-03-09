import React from "react";
import "../index.css";

const GoogleFormButton = () => {
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSdlwnhxIrfp5GNtnZNYSLkzS8w7uPIZus09TZGRCUSQz-BaoQ/viewform?usp=header"; // Replace with your actual Google Form link

  return (
    <a
      href={formLink}
      target="_blank"
      rel="noopener noreferrer"
      className="pre-order-button px-6 py-3 text-white bg-gradient-to-r from-red-500 to-yellow-500 rounded-full hover:from-red-600 hover:to-yellow-600 transition duration-300 shadow-lg font-semibold text-lg tracking-wide border-2 border-white"
    >
      Pre Order
    </a>
  );
};

function Banner() {
  return (
    <div className="banner-section-bg-container flex items-center gap-4 p-6">
      <div>
        <h1 className="banner-heading text-3xl font-bold">Welcome to K-Square Mark Antony</h1>
        <p className="banner-caption text-lg text-gray-200">Delicious meals at your doorstep</p>
      </div>
      <GoogleFormButton />
    </div>
  );
}

export default Banner;