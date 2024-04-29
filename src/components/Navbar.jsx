import React, { useState } from "react";
import { FaCommentDots, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          Med <span className="navbar-sign">Ez</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="navbar-links">
            Services
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="navbar-links">
            About
          </Link>
        </li>
        <li>
          <Link to="/reviews" className="navbar-links">
            Reviews
          </Link>
        </li>
        <li>
          <Link to="/doctors" className="navbar-links">
            Doctors
          </Link>
        </li>
        <li>
          <a href="/signup" className="navbar-links">
            Sign Up
          </a>
        </li>

        <li>
          <a href="/login" className="navbar-links">
            Log In
          </a>
        </li>
      </ul>

      <button
        className="flex gap-2 justify-between items-center navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <FaCommentDots /> Live Chat
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FaXmark className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/aboutus">About</a>
          </li>
          <li>
            <a href="/reviews">Reviews</a>
          </li>
          <li>
            <a href="/doctors">Doctors</a>
          </li>

          <li>
          <a href="/signup">Sign Up</a>{" "}
          </li>

          <li>
            <a href="/login">Log In</a>{" "}
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FaBars onClick={openNav} className="hamb-icon" />
      </div>
    </div>
  );
}

export default Navbar;
