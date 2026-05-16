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
    // <div className="hero">

    //   <h1>Luxury Cars on Rent</h1>

    //   <form onSubmit={handleSearch}>
    //     <div className="form-container">

    //       <div className="input-group">
    //         <select
    //           required
    //           value={pickupLocation}
    //           onChange={(e) => setPickupLocation(e.target.value)}
    //         >
    //           <option value="">Pickup Location </option>
    //           {cityList.map((city) => 
    //             <option key={city} value={city}>
    //               {city}
    //             </option>
    //           )}
             
    //         </select>

    //         <p>{pickupLocation ? pickupLocation : "Please Select Location"}</p>
    //       </div>

    //       <div className="input-group">
    //         <label htmlFor="pickup-date">Pick-up Date</label>
    //         <input
    //         value={pickupDate}
    //         onChange={e=>setPickupDate(e.target.value)}
    //           type="date"
    //           id="pickup-date"
    //           min={new Date().toISOString().split("T")[0]}
    //         />
    //       </div>

    //       <div className="input-group">
    //         <label htmlFor="return-date">Return Date</label>
    //         <input
    //         value={returnDate}
    //         onChange={e=>setReturnDate(e.target.value)}
    //         type="date" id="return-date" />
    //       </div>

    //       <button type="submit" className="search-btn">
    //         <img src={assets.search_icon} alt="search" />
    //         Search
    //       </button>

    //     </div>
    //   </form>

    //   {/* <div className="car-image">
    //     <img src={assets.main_car} alt="car" />
    //   </div> */}

    // </div>
//     <div className="hero">

//   <div className="hero-content">
    
//     <div className="hero-left">
//       <p className="discount">30% Discount on the first rental</p>

//       <h1>Get the best rental car in easy way</h1>

//       <p className="desc">
//         You can receive the car you want for as long as you with 100% digital technology.
//       </p>

//       <button className="get-started">Get Started</button>
//     </div>

//     <div className="hero-right">
//       <img src={assets.range_image5} alt="car" />
//     </div>

//   </div>

//   <form onSubmit={handleSearch} className="search-bar">

//     <div className="input-box">
//       <label>Pick up location</label>
//       <select value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)}>
//         <option value="">Select</option>
//         {cityList.map((city)=>(
//           <option key={city}>{city}</option>
//         ))}
//       </select>
//     </div>

//     <div className="input-box">
//       <label>Pick up date</label>
//       <input type="date" value={pickupDate} onChange={e=>setPickupDate(e.target.value)} />
//     </div>

//     <div className="input-box">
//       <label>Return date</label>
//       <input type="date" value={returnDate} onChange={e=>setReturnDate(e.target.value)} />
//     </div>

//     <button className="search-btn2">Search</button>

//   </form>

// </div>
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