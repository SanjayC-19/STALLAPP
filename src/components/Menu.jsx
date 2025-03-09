import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import local images correctly
import ThengaiPaalImg from "../assets/ThengaiPaal.jpg";
import ElaneerPayasamImg from "../assets/Elaneerpayasam.jpeg";
import JellyImg from "../assets/Jelly.webp";
import PizzaImg from "../assets/Pizza.jpeg";

const menuItems = [
  {
    imgSrc: ThengaiPaalImg, // Use imported image
    title: "Thengai Paal",
    description: "Price: 30",
  },
  {
    imgSrc: ElaneerPayasamImg,
    title: "Elaneer Payasam",
    description: "Price: 45",
  },
  {
    imgSrc: JellyImg,
    title: "Jelly",
    description: "Price: 30",
  },
  {
    imgSrc: PizzaImg,
    title: "Pizza",
    link: "https://www.dominos.co.in/store-location/tirupur/avinashi-road-tirupur/menu",
  },
];

function Menu() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4" style={{ color: "black", fontWeight: "bold" }}>
        Our Menu
      </h1>
      <div className="row">
        {menuItems.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-3" key={index}>
            <div className="shadow menu-item-card p-3 mb-3 text-center">
              <img src={item.imgSrc} alt={item.title} className="menu-item-image w-100" />
              <h2 className="menu-card-title mt-3">{item.title}</h2>
              <p className="menu-item-description">{item.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
