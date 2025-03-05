import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../index.css";

function FollowUs() {
  return (
    <div className="follow-us-section">
      <h2 className="follow-us-section-heading">Follow Us</h2>
      <div className="follow-icons-container">
        <div className="follow-us-icon-container">
          <FaFacebook className="icon" />
        </div>
        <div className="follow-us-icon-container">
          <FaTwitter className="icon" />
        </div>
        <div className="follow-us-icon-container">
          <FaInstagram className="icon" />
        </div>
      </div>
    </div>
  );
}

export default FollowUs;