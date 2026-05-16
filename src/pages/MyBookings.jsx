import React, { useEffect, useState } from "react";
import { assets, } from "../assets/assets";
import Title from "../components/Title";
import "./MyBookings.css";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const MyBookings = () => {

const{axios,user} =useAppContext()

  const [bookings, setBookings] = useState([]);

  // const fetchMyBookings = async () => {
  //   try {
  //     const{data} = await axios.get('/api/bookings/user')
  //     if(data.success){
  //      setBookings(data.bookings);
  //     }
  //     else(error){
  //       toast.error(data.message)
  //     }
  //   } catch (error) {
  //     toast.error(error.message)
  //   }
    
  // };
  const fetchMyBookings = async () => {
  try {
    const { data } = await axios.get('/api/bookings/user');

    if (data.success) {
      setBookings(data.bookings);
    } else {
      toast.error(data.message);
    }

  } catch (error) {
    toast.error(error.message);
  }
};

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    user && fetchMyBookings();
  }, [user]);
      useEffect(() => {
    if (user) fetchMyBookings();

    // ✅ Poll every 5 seconds
    const interval = setInterval(() => {
      if (user) fetchMyBookings();
    }, 5000);

    return () => clearInterval(interval);
  }, [user, bookings]);

  return (
    <div className="mybookings-page">
      <Title
        title="My Bookings"
        subTitle="View and manage your all car bookings"
      />

      <div className="bookings-container">
        {bookings.map((booking, index) => (
          <div className="booking-row-card" key={booking._id}>
            
            {/* Left: Image & Car Name */}
            <div className="section-left">
              <img src={booking.car.image} alt="car" className="car-thumbnail" />
              <div className="car-title-info">
                <h3 className="car-display-name">{booking.car.brand} {booking.car.model}</h3>
                <p className="car-specs-meta">
                  {booking.car.year} • {booking.car.category} • {booking.car.location}
                </p>
              </div>
            </div>

            {/* Middle: Booking Status & Details */}
            <div className="section-middle">
              <div className="status-header">
                <span className="booking-number">Booking #{index + 1}</span>
                <span className={`status-pill ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </span>
              </div>

              <div className="detail-entry">
                <img src={assets.calendar_icon_colored} alt="cal" />
                <div className="text-group">
                  <p className="entry-label">Rental Period</p>
                  <p className="entry-value">
                    {booking.pickupDate.split("T")[0]} To {booking.returnDate.split("T")[0]}
                  </p>
                </div>
              </div>

              <div className="detail-entry">
                <img src={assets.location_icon_colored} alt="loc" />
                <div className="text-group">
                  <p className="entry-label">Pick-up Location</p>
                  <p className="entry-value">{booking.car.location}</p>
                </div>
              </div>
            </div>

            {/* Right: Total Price */}
            <div className="section-right">
              <p className="price-label">Total Price</p>
              <h2 className="price-value">${booking.price}</h2>
              <p className="booked-timestamp">Booked on {booking.createdAt.split("T")[0]}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;