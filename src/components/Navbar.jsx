import React, { useState } from "react";
import { FaCommentDots,FaBars } from "react-icons/fa";
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
        <Link to="/services"
          className="navbar-links">
            Services
          </Link>
        </li>
        <li>
        <Link to="/aboutus"

           className="navbar-links">
            About
          </Link>
        </li>
        <li>

                  <Link to="/reviews"
 className="navbar-links">
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
 Development
          </li>
      </ul>

      <button
        className="navbar-btn"
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
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="reviews">
              Reviews
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/doctors">
              Doctors
            </Link>
          </li>

          <li>
            <Link onClick={openNav} to="/signup">
              SignUp
            </Link>
          </li>

          <li>
            <Link onClick={openNav} to="/login">
              Login
            </Link>
          </li>

          <li>
            <Link onClick={openNav} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FaBars
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;