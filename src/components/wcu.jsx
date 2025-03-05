import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function WhyChooseUs() {
  return (
    <div className="wcu-section pt-5 pb-5" id="wcuSection">
      <div className="container">
        <div className="row">
          {/* Section Heading */}
          <div className="col-12 text-center">
            <h1 className="wcu-section-heading">Why Choose Us?</h1>
            <p className="wcu-section-description">
              We use both original recipes and classic versions of famous food items.
            </p>
          </div>

          {/* Cards Section */}
          {[
            {
              imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png",
              title: "Food Service",
              description:
                "Experience fine dining at the comfort of your home. All our orders are carefully packed and arranged to give you nothing less than perfect.",
            },
            {
              imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png",
              title: "Fresh Food",
              description:
                "The Fresh Food group provides fresh-cut fruits and vegetables directly picked from our partner farms so that you always get them tree to plate.",
            },
            {
              imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png",
              title: "Best Offers",
              description:
                "Food Coupons & Offers up to 50% OFF and Exclusive Promo Codes on All Online Food Orders.",
            },
          ].map((card, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="wcu-card p-3 mb-3 text-center shadow-sm">
                <img src={card.imgSrc} alt={card.title} className="wcu-card-image img-fluid" />
                <h2 className="wcu-card-title mt-3">{card.title}</h2>
                <p className="wcu-card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
