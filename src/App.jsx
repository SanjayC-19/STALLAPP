import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import FollowUs from "./components/FollowUs";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/wcu"; // Corrected import

// Pages for different menu sections
import NonVegStarters from "./pages/non-veg-starters";
import VegStarters from "./pages/veg-starters";
import Soups from "./pages/soups";
import FishSeafood from "./pages/fish-seafood";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar remains on all pages */}
        <Navbar />

        {/* Routes for different pages */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <WhyChooseUs />
                <Menu />
              </>
            }
          />
          
        </Routes>

        {/* Footer remains on all pages */}
        <FollowUs />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
