import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets,  } from "../assets/assets";
import "./CarDetails.css";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const CarDetails = () => {
  const { id } = useParams();

const {cars,axios,pickupDate,setPickupDate,returnDate,setReturnDate} = useAppContext()

  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const found = cars.find((c) => c._id === id);
    setCar(found);
  }, [cars,id]);

  if (!car) return <p className="loading">Loading...</p>;

const handleBooking = async (e) => {
  e.preventDefault();

  if (!pickupDate || !returnDate) {
    alert("Please select dates");
    return;
   

  }
   try {
      const {data} = await axios.post('/api/bookings/create',{carId:car._id, pickupDate, returnDate})
      if(data.success){
        toast.success(data.message)
        navigate('/my-bookings')
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }


  // API call here (future)
  console.log("Booking:", car._id, pickupDate, returnDate);
};



  return (
    <div className="car-details-page">
      {/* Back button */}
      <button className="back-link" onClick={() => navigate(-1)}>
        ← Back to all cars
      </button>

      <div className="car-layout">
        {/* LEFT SIDE */}
        <div className="car-left">
          <img src={car.image} alt="" className="car-main-img" />

          <div className="car-title1">
            <h1>{car.brand} {car.model}</h1>
            <p>{car.year} • {car.category}</p>
          </div>

          <hr />

          {/* specs */}
          <div className="car-specs">
            <div className="spec-box">
              <img src={assets.users_icon} alt="" />
              <span>{car.seating_capacity} Seats</span>
            </div>

            <div className="spec-box">
              <img src={assets.fuel_icon} alt="" />
              <span>{car.fuel_type}</span>
            </div>

            <div className="spec-box">
              <img src={assets.car_icon} alt="" />
              <span>{car.transmission}</span>
            </div>

            <div className="spec-box">
              <img src={assets.location_icon} alt="" />
              <span>{car.location}</span>
            </div>
          </div>

          {/* description */}
          <div className="car-desc">
            <h3>Description</h3>
            <p>{car.description}</p>
          </div>

          {/* features */}
          <div className="car-features">
            <h3>Features</h3>

            <div className="features-grid">
              {[
                "Leather Seats",
                "Panoramic Sunroof",
                "Wireless Charging",
                "360 Camera",
              ].map((item) => (
                <div className="feature-item" key={item}>
                  <img src={assets.check_icon} alt="" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE BOOKING CARD */}
        <div className="car-booking">
          <div className="price">
            <h2>₹{car.pricePerDay}</h2>
            <span>per day</span>
          </div>

          <hr />

          <form className="booking-form" onSubmit={handleBooking}>
            <label>Pickup Date</label>
            <input type="date" 
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            required />

            <label>Return Date</label>
            <input type="date" 
            value={returnDate}
  onChange={(e) => setReturnDate(e.target.value)}
            required />

            <button type="submit">Book Now</button>

            <p className="note">
              No credit card required to reserve
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;