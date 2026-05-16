import React from "react";
import "./Banner.css";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="luxury-banner">

      <div className="banner-content">

        <h1 className="banner-title">
          Do You Own a Luxury Car?
        </h1>

        <p className="banner-text">
          Monetize your vehicle effortlessly by listing it on CarRental.
          We take care of insurance, driver verification and secure payments —
          so you can earn passive income, stress-free.
        </p>

        <button className="banner-btn">
          List your car
        </button>

      </div>

      <div className="banner-image">
        <img src={assets.banner_car_image} alt="car" />
      </div>

    </div>
  );
};

export default Banner;