import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";

import About from "./NavbarPage/About";
import Services from "./NavbarPage/Services";
import Contact from "./NavbarPage/Contact";
import Delivery from "./NavbarPage/Delivery";
import UserProfile from "./NavbarPage/UserProfile";
import Cart from "./NavbarPage/Cart";
import Wishlist from "./NavbarPage/Wishlist";

import "./App.css";
import bgImage from "./assets/flowers-bg.jpg";

function AppContent() {
  // ---------------------------
  // ADD TO CART STATE
  // ---------------------------
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Track current URL
  const location = useLocation();

  // Pages where Footer MUST be visible
  const showFooterPages = ["/", "/about", "/services"];

  // Check current page
  const showFooter = showFooterPages.includes(location.pathname);

  return (
    <div
      className="app-bg"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Navbar (Always Visible) */}
      <Navbar cartCount={cartItems.length} />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Catalog addToCart={addToCart} />
            </>
          }
        />

        {/* Navbar routes */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/delivery" element={<Delivery />} />

        {/* User Dashboard */}
        <Route path="/profile" element={<UserProfile />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />

        {/* Wishlist */}
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      {/* Footer only on selected pages */}
      {showFooter && <Footer />}
      {showFooter && <Contact />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
