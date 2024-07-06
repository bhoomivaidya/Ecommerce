import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className="item" data-value="1">
    <img
      src={require("./MainCaroselImages/first.jpeg")}
      alt="Slide 1"
      style={{ width: "100%", height: "600px" }}
    />
  </div>,
  <div className="item" data-value="2">
    <img
      src={require("./MainCaroselImages/second.jpeg")}
      alt="Slide 2"
      style={{ width: "100%", height: "600px" }}
    />
  </div>,
  <div className="item" data-value="3">
    <img
      src={require("./MainCaroselImages/third.jpeg")}
      alt="Slide 3"
      style={{ width: "100%", height: "600px" }}
    />
  </div>,
];

const MainCarosel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    controlsStrategy="alternate"
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
  />
);

export default MainCarosel;
