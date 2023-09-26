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
  const ProductHeader = () =>{
    navigate("/ProductHeader")
  }
  const visionHealth = () =>{
    navigate("/vision")
  }
 
  return (
    
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
          
            <p onClick={visionHealth}>Vision Health</p>
            <p onClick={ProductHeader}>Products</p>
          
            <p className="contact-btn" onClick={NavContact}>
              Contact us
            </p>
          </div>
        
        
      </nav>
    
  );
};

export default Navbar;
