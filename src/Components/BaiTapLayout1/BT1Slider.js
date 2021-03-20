import React, { Component } from "react";

export default class BT1Slider extends Component {
  render() {
    return (
      <div
        id="demo"
        className="carousel slide container-fluid"
        data-ride="carousel"
      >
        {/* Indicators */}
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className="active" />
          <li data-target="#demo" data-slide-to={1} className />
          <li data-target="#demo" data-slide-to={2} className />
        </ul>
        {/* The slideshow */}
        <div className="carousel-inner text-center">
          <div className="carousel-item active m-auto">
            <img
              src="./img/slide_1.jpg"
              alt="Los Angeles"
              className="img-fluid"
              height={500}
            />
          </div>
          <div className="carousel-item m-auto ">
            <img
              src="./img/slide_2.jpg"
              alt="Chicago"
              className="img-fluid"
              height={500}
            />
          </div>
          <div className="carousel-item m-auto">
            <img
              src="./img/slide_3.jpg"
              alt="New York"
              className="img-fluid"
              height={500}
            />
          </div>
        </div>
        {/* Left and right controls */}
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    );
  }
}
