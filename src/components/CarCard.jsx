import React from "react";
import { assets } from "../assets/assets";
import "./CarCart.css";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  // const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate()
  

  return (
    <div onClick={()=>{navigate(`/car-details/${car._id}`);scrollTo(0,0)}}className="car-card">
      <div className="car-image-container">
        <img className="main-car-img" src={car.image} alt="car" />
           <div className="status-badge">
 {car.isAvailable && <p className="car-available">Available Now</p>}
           </div>
       

        <div className="price-overlay">
          <span className="price-val">
            ₹
            {car.pricePerDay}
          </span>
          <span className="price-unit"> / day</span>
        </div>
      </div>

      <div className="car-detail">
        <div className="car-title">
          <h3>
            {car.brand} {car.model}
          </h3>
          <p>
            {car.category} • {car.year}
          </p>
        </div>

        <div className="car-infomation">
          <div className="info-item">
            <img src={assets.users_icon} alt="" />
            <span>{car.seating_capacity} Seats</span>
          </div>

          <div className="info-item">
            <img src={assets.fuel_icon} alt="" />
            <span>{car.fuel_type}</span>
          </div>

          <div className="info-item">
            <img src={assets.car_icon} alt="" />
            <span>{car.transmission}</span>
          </div>

          <div className="info-item">
            <img src={assets.location_icon} alt="" />
            <span>{car.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;