import React from "react";
import image from "../../assets/images/slider.png";
import "../../styles/heroPage/HeroPage.css";

const HeroPage = () => {
  return (
    <div className="image-container ">
      <img className="heroImage" src={image} alt="Hero" />
    </div>
  );
};

export default HeroPage;
