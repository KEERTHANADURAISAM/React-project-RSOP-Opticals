import React from "react";
import "./Intro.css";
import img1 from "./images/Fashionable-Women-Wearing-Sunglasses-PNG.png";
import Base from "../Base/Base";
import sunglasses from'./images/Screenshot 2023-06-29 140144.png';
import powerglasses from'./images/Screenshot 2023-06-29 140201.png';
import lens from'./images/Screenshot 2023-06-29 140219.png';
import bookimg from'./images/Screenshot 2023-06-29 142659.png';
import timer from'./images/clock.png';

import aboutimg from './images/Screenshot 2023-06-29 123400.png'

const Intro = () => {
  return (
    <Base>
    
      <div className="grid-container">
        <div className="grid-div">
          <h6>Improdev Vision An Improdev Life </h6>
          <br />
          <h2 className="head-content">
            You Eyes Were
            <br />
            Closed,They're Open <br />
            Now.
          </h2>
          <button className="btn-intro">Visit Our Shop</button>
        </div>
        <div className="intro-img-div">
          <img src={img1} className="intro-img" />
        </div>
      </div>
    <div className="Card-position">
        <div className="grid-card-container">
          <div className="grid-card-design">
            <div className="avatar"></div>
            <p className="card-header">Eye Care</p>
            <p className="card-content">
              Lorem ipsum dolor sit<br></br>amet consectetur<br></br>{" "}
              adipisicing elit.<br></br>
              Beatae,corruptieos quod aperiam
            </p>
          </div>
          <div className="grid-card-design">
            <div className="avatar"></div>
            <p className="card-header">Eye Care</p>
            <p className="card-content">
              Lorem ipsum dolor sit<br></br>amet consectetur<br></br>{" "}
              adipisicing elit.<br></br>
              Beatae,corruptieos quod aperiam
            </p>
          </div>
          <div className="grid-card-design">
            <div className="avatar"></div>
            <p className="card-header">Eye Care</p>
            <p className="card-content">
              Lorem ipsum dolor sit<br></br>amet consectetur<br></br>{" "}
              adipisicing elit.<br></br>
              Beatae,corruptieos quod aperiam
            </p>
          </div>
          <div className="grid-card-design">
            <div className="avatar"></div>
            <p className="card-header">Eye Care</p>
            <p className="card-content">
              Lorem ipsum dolor sit<br></br>amet consectetur<br></br>{" "}
              adipisicing elit.<br></br>
              Beatae,corruptieos quod aperiam
            </p>
          </div>
        </div>
      </div> 
     <div className='about-grid'>
        <div>
        <img src={aboutimg} alt="About" className='about-img'/>
        </div>
        <div className='about-content-div'>
            <p className='about-mainhead'>ABOUT US</p>
            <p className='about-subhead'>Style Yourself With The<br></br>Best Lens</p>
            <p className='About-content'>Lorem ipsum dolor sit amet
consectetur adipisicing elit.Beatae,corruptieos quod aperiam.Lorem ipsum dolor sit amet
consectetur adipisicing elit.Beatae,corruptieos quod aperiam</p>
<button className='about-btn'> About Us</button>
        </div>
    </div>
    <div id='product'>
        <div className='product-div'>
            <p className='pro-head'>PRODUCTS</p>
            <p className='pro-content'>Hot from last seasons</p>
        </div>
        <div className='pro-imgs'>
            <div className='img-flex'>
            <img src={sunglasses} alt="sunglasses" />
            <p className='img-name'>Sunglass</p>
            </div>
            <div className='img-flex'>
            <img src={powerglasses} alt="powerglasses"/>
            <p className='img-name'>Power Glasses</p>
            </div>
            <div className='img-flex'>
            <img src={lens} alt="lens"/>
            <p className='img-name'>Contact Lenses</p>
            </div>

        </div>
    </div>
    <div className='book-grid-div'>
        <div className='book-img-flex'>
            <img src={bookimg} alt="Book Appoinment" className='book-img'/>
        </div>
        <div className='booking-content'>
<p>Book Appoinment</p><br></br>
<h2 className='book-subhead'>Plan Your Visit Now</h2>
<p className='book-text'>Lorem ipsum dolor sit amet
consectetur adipisicing elit.Beatae,corruptieos quod aperiam.Lorem ipsum dolor sit amet
consectetur adipisicing elit.Beatae,corruptieos quod aperiam</p>
<button className='btn-book'>Take Appoinment</button>
<div className='book-timing-div'>
<img src={timer} alt="timer" className='timer-img'/>
<p className='book-time-head'>Opening Hours</p>
</div>
<div className='timing-details'>
<div>
<p>Monday-Friday</p><br></br>
<p>Saturday</p><br></br>
<p>Sunday & Holidays</p>
</div>
<div className='timing'>
<p>08.00AM-04.00PM</p><br></br>
<p>10.00AM-19.00PM</p><br></br>
<p>Closed</p>
</div>
</div>
        </div>
    </div> 
    
      
    </Base>
  );
};

export default Intro;
