import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const menuItems = [
  {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png",
    title: "Non-Veg Starters",
    link: "/non-veg-starters",
  },
  {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png",
    title: "Veg Starters",
    link: "/veg-starters",
  },
  {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png",
    title: "Soups",
    link: "/soups",
  },
  {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png",
    title: "Fish & Seafood",
    link: "/fish-seafood",
  },
];

function Menu() {
  return (
    <div className="container py-5">
      <div className="row">
        {menuItems.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-3" key={index}>
            <div className="shadow menu-item-card p-3 mb-3 text-center">
              <img src={item.imgSrc} alt={item.title} className="menu-item-image w-100" />
              <h2 className="menu-card-title mt-3">{item.title}</h2>
              <Link to={item.link} className="menu-item-link d-flex justify-content-center align-items-center gap-1">
                View All
                <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
