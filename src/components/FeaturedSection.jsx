import React from "react";
import Title from "./Title";
import { assets,  } from "../assets/assets";
import CarCard from "./CarCard";
import { useNavigate } from "react-router-dom";
import "./FeaturedSection.css";
import { useAppContext } from "../context/AppContext";
// import CarCart from "./CarCart";

const FeaturedSection = () => {
  const navigate = useNavigate();
 const {cars} = useAppContext()
  return (
    <div className="featured-section">

      <div className="featured-title">
        <Title
          title="Featured Vehicles"
          subTitle="Explore our selection of premium vehicles available for your next adventure"
        />
      </div>

      <div className="featured-cars">
        {cars.slice(0, 6).map((car) => (
          <div key={car._id} className="featured-car-item">
            <CarCard car={car} />
          </div>
        ))}
      </div>

      <div className="featured-btn-container">
        <button
          className="explore-btn"
          onClick={() => {
            navigate("/cars");
            scrollTo(0, 0);
          }}
        >
          Explore all cars
          <img src={assets.arrow_icon} alt="arrow" />
        </button>
      </div>

    </div>
  );
};

export default FeaturedSection;