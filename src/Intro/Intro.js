import React from "react";
import "./Intro.css";
import img1 from "./images/Fashionable-Women-Wearing-Sunglasses-PNG.png";
import Base from "../Base/Base";
import About from "../AboutUs/About";
import Product from "../Product/Product";
import BookAppoinment from "../Appoinment/BookAppoinment";

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
      <div className="add-items">
        <About />
        <Product />
        <BookAppoinment />
      </div>
    </Base>
  );
};

export default Intro;
