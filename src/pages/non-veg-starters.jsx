import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"; // Ensure this file contains styles
import food from "../assets/food1.jpg";
import egg from "../assets/egg.jpg";
import fish from "../assets/fish.jpg";
import mutton from "../assets/mutton.jpg";
function NonVegStarters() {
  const items = [
    { id: 1, image: food, title: "Chicken Biryani", cost: 150, description: "Delicious and flavorful biryani" },
    { id: 2, image: mutton, title: "Mutton Biryani", cost: 200, description: "Spicy and aromatic mutton biryani" },
    { id: 3, image: fish, title: "Fish Biryani", cost: 180, description: "Fresh fish cooked with biryani spices" },
    { id: 4, image: egg, title: "Egg Biryani", cost: 120, description: "Eggs blended with rich biryani flavors" },
  ];

  return (
    <div className="container pt-5 pb-5">
      <div className="row">
        {/* Section Heading */}
        <div className="col-12 text-center">
          <h1 className="section-heading">Non-Veg Starters</h1>
          <p className="section-description">
            Enjoy our delicious non-veg starters made with fresh ingredients.
          </p>
        </div>

        {/* Product Cards */}
        {items.map((item) => (
          <div className="col-12 col-md-6 mb-4" key={item.id}>
            <div className="product-card p-3 text-center shadow-sm">
              <img src={item.image} alt={item.title} className="product-card-image img-fluid" />
              <h2 className="product-card-title mt-3">{item.title}</h2>
              <p><strong>Cost:</strong> {item.cost}</p>
              <p className="product-card-description">{item.description}</p>
              <button className="btn btn-custom">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NonVegStarters;
