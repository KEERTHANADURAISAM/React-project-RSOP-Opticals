import React from "react";
import "./Navbar.css";
import imglogo from "./logo.jpg";
import { useNavigate } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();
  const HomePage = () => {
    navigate("/home");
  };
  const NavContact = () => {
    navigate("/contact");
  };
  const ProductOne = () => {
    navigate("/ProductPage");
  };
  const ProductTwo = () => {
    navigate("/ProductPage");
  };
  const ProductThree = () => {
    navigate("/ProductPage");
  };
  return (
    <div className="nav-main-div">
      <nav className="navbar-nav">
        <div className="logo-div">
          <img
            src={imglogo}
            alt="logo"
            className="img-logo"
            onClick={() => scroll.scrollToTop()}
          />
        </div>
        <div className="nav-items">
          <p onClick={HomePage}>Home</p>
          <div>
            <p>Vision Health</p>
          </div>
          <div className="dropup">
            <p>Products</p>
            <div className="dropup-menu">
              <a onClick={ProductOne}> Designer Frames</a>
              <a onClick={ProductTwo}>Lenses</a>
              <a onClick={ProductThree}>Contact Lenses</a>
            </div>
          </div>
          <div>
            <button className="contact-btn" onClick={NavContact}>
              Contact us
            </button>
          </div>
        </div>
        <div></div>
      </nav>
    </div>
  );
};

export default Navbar;
