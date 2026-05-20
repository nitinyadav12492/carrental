import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";
import "./Hero.css";
import { useAppContext } from "../context/AppContext";

const Hero = () => {

  const [pickupLocation, setPickupLocation] = useState("");
 const{pickupDate,setPickupDate,returnDate,setReturnDate,navigate} = useAppContext()
  const handleSearch = (e) => {
    e.preventDefault(); // prevent page reload
    navigate('/cars?pickupLocation=' + pickupLocation+'&pickupDate='+pickupDate + '&returnDate='+returnDate)
    };

  return (
   
<div className="hero">
  <div className="hero-content">
    <span>30% Discount on the first rental</span>
    <h1>Get the best rental car in easy way</h1>
    <p>You can receive the car you want for as long as you with 100% digital technology...</p>
    <button className="get-started-btn">Get Started</button>
  </div>

  <div className="car-image">
    <img src={assets.range_image6} alt="car" />
    {/* Blue background shape can be added here with a div */}
  </div>

  <form onSubmit={handleSearch} className="form-container">
    <div className="input-group">
      <label>Pick up address</label>
      <select 
      required
        value={pickupLocation} 
        onChange={(e) => setPickupLocation(e.target.value)}
      >
        <option value="">Select Location</option>
        {cityList.map(city => <option key={city} value={city}>{city}</option>)}
      </select>
      {/* <p>{pickupLocation ? pickupLocation:"Please Select Location"}</p> */}
    </div>

    <div className="input-group">
      <label htmlFor="pickup-date">Pick-up Date</label>
       <input
             value={pickupDate}
             onChange={e=>setPickupDate(e.target.value)}
               type="date"
               id="pickup-date"
               min={new Date().toISOString().split("T")[0]}
           />
    </div>

    <div className="input-group">
      <label htmlFor="return-date">Return Date</label>
      <input
             value={returnDate}
             onChange={e=>setReturnDate(e.target.value)}
            type="date" id="return-date" />
    </div>

    <button type="submit" className="search-btn">
      <img src={assets.search_icon} alt="search" />
      Search
    </button>
  </form>
</div>
  );
};

export default Hero;