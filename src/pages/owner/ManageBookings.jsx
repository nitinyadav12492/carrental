// import React, { useEffect, useState } from "react";
// import "./ManageBookings.css";

// import { useAppContext } from "../../context/AppContext";
// import { toast } from "react-toastify";

// const ManageBookings = () => {
//  const{axios}=useAppContext()
// const [bookings,setBookings] = useState([]);

// const fetchOwnerBookings = async ()=>{
//   try{
// const {data} =await axios.get('/api/bookings/owner')
// data.success? setBookings(data.bookings):toast.error(data.message)
//   }catch(error){
//   toast.error(error.message)
//   }
// }
// const changeBookingStatus = async (bookingId,status)=>{
//   try{
//        setBookings((prev) =>
//       prev.map((b) =>
//         b._id === bookingId ? { ...b, status } : b
//       )
//     );
// const {data} =await axios.post('/api/bookings/change-status',{bookingId,status})
// if(data.success){toast.success(data.message)
//   fetchOwnerBookings()
// }else{
//   toast.error(data.message)
// }
//   }catch(error){
//   toast.error(error.message)
//   }
// }

// useEffect(()=>{
// // eslint-disable-next-line react-hooks/set-state-in-effect
// fetchOwnerBookings()
// },[]);


// return (

// <div className="manage-bookings">

// <h2>Manage Bookings</h2>

// <p className="subtitle">
// Track all customer bookings, approve or cancel requests, and manage booking statuses
// </p>

// <div className="booking-card">
//   <div className="table-wrapper">
//     <table>
//       <thead>
//         <tr>
//           <th>Car</th>
//           <th>Date Range</th>
//           <th>Total</th>
//           <th>Payment</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>

// {bookings.map((booking)=>(

// <tr key={booking._id}>

// <td className="car-info">

// <img src={booking.car.image} alt="" />

// <span>{booking.car.brand} {booking.car.model}</span>

// </td>

// <td>{booking.pickupDate?.split('T')[0]} to {booking.returnDate.split('T')[0]}</td>

// <td>₹{booking.price}</td>
// <td>
//   <span className="payment-tag">Offline</span>
// </td>

// {/* <td>
// {
//   booking.status === 'pending' ? (
//     <select className="sbnt" onChange={e => changeBookingStatus(booking._id,e.target.value
//     )} value={booking.status}>
//       <option value="pending">Pending</option>
//        <option value="cancelled">Cancelled</option>
//           <option value="confirmed">Confirmed</option>
//     </select>
//   ):(
//    <span className={`status-badge ${booking.status || "pending"}`}>
//   {booking.status || "Pending"}
// </span>
//   )
// }



// </td> */}
// <td>
//   <select
//     className={`status-select ${booking.status}`}
//     onChange={(e) =>
//       changeBookingStatus(booking._id, e.target.value)
//     }
//     value={booking.status}
//     disabled={booking.status !== "pending"}   // 🔥 IMPORTANT LINE
//   >
//     <option value="pending">Pending</option>
//     <option value="cancelled">Cancelled</option>
//     <option value="confirmed">Confirmed</option>
//   </select>
// </td>
// <td>



// </td>

// </tr>

// ))}

// </tbody>

// </table>

// </div>

// </div>

// );

// };

// export default ManageBookings;


// // export default ManageBookings;
// //  import React, { useEffect, useState } from "react";
// //  import "./ManageBookings.css";
// //  import { useAppContext } from "../../context/AppContext";
// //  import { toast } from "react-toastify";

// //  const ManageBookings = () => {
// //   const { axios } = useAppContext();
// //   const [bookings, setBookings] = useState([]);

//   // Fetch bookings
//   // const fetchOwnerBookings = async () => {
//   //   try {
//   //     const { data } = await axios.get("/api/bookings/owner");
//   //     if (data.success) {
//   //       setBookings(data.bookings);
//   //     } else {
//   //       toast.error(data.message);
//   //     }
//   //   } catch (error) {
//   //     toast.error(error.message);
//   //   }
//   // };

// //   // Change status
// //   const changeBookingStatus = async (bookingId, status) => {
// //     try {
// //       const { data } = await axios.post(
// //         "/api/bookings/change-status",
// //         { bookingId, status }
// //       );

// //       if (data.success) {
// //         toast.success(data.message);
// //         fetchOwnerBookings();
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchOwnerBookings();
// //   }, []);

// //   return (
// //     <div className="manage-bookings">

// //       <h2>🚗 Manage Bookings</h2>
// //       <p className="subtitle">
// //         Track and manage all bookings easily
// //       </p>

// //       <div className="booking-card">

// //         <table>
// //          <thead>
// //              <tr>
// //                <th>Car</th>
// //                <th>Date</th>
// //                <th>Payment</th>
// //                <th>Status</th>
// //                <th>Price</th>
// //              </tr>
// //            </thead>

// //            <tbody>
// //              {bookings.map((booking) => (
// //               <tr key={booking._id}>

               
// //                 <td className="car-info">
// //                   <img src={booking.car.image} alt="" />
// //                   <span>
// //                     {booking.car.brand} {booking.car.model}
// //                   </span>
// //                  </td>

           
// //                  <td className="date-cell">
// //                   {booking.pickupDate?.split("T")[0]} <br /> to <br />
// //                   {booking.returnDate.split("T")[0]}
// //                  </td>

// //                 {/* PAYMENT (ONLY OFFLINE) */}
// //                <td>
// //                    <span className="payment">Offline</span>
// //                 </td>

// //                 {/* STATUS DROPDOWN */}
// //                 <td>
// //                   <select
// //                     value={booking.status}
// //                     onChange={(e) =>
// //                       changeBookingStatus(
// //                         booking._id,
// //                         e.target.value
// //                       )
// //                     }
// //                     className="status-select"
// //                   >
// //                     <option value="pending">Pending</option>
// //                     <option value="confirmed">Confirmed</option>
// //                     <option value="completed">Completed</option>
// //                   </select>
// //                 </td>

// // {/* STATUS COLUMN */}
// // <td>
// //   {booking.status && booking.status.toLowerCase() === "pending" ? (
// //     <select
// //       value={booking.status.toLowerCase()}
// //       onChange={(e) => changeBookingStatus(booking._id, e.target.value)}
// //       className="status-dropdown"
// //     >
// //       <option value="pending">Pending</option>
// //       <option value="confirmed">Confirmed</option>
// //       <option value="completed">Completed</option>
// //       <option value="cancelled">Cancelled</option>
// //     </select>
// //   ) : (
// //     <span className={`status-badge ${booking.status?.toLowerCase() || ""}`}>
// //       {booking.status || "N/A"}
// //     </span>
// //   )}
// // </td>

// {/* PRICE COLUMN */}
// {/* <td>₹{booking.price.toLocaleString()}</td>

//               </tr>
//             ))}
//           </tbody>

//         </table>

//       </div>

//     </div>
//   );
// }; */}

// // export default ManageBookings;

// // import React, { useEffect, useState } from "react";
// // import "./ManageBookings.css";
// // import { useAppContext } from "../../context/AppContext";
// // import { toast } from "react-toastify";

// // const ManageBookings = () => {
// //   const { axios } = useAppContext();
// //   const [bookings, setBookings] = useState([]);

// //   const fetchOwnerBookings = async () => {
// //     try {
// //       const { data } = await axios.get('/api/bookings/owner');
// //       if (data.success) {
// //         setBookings(data.bookings);
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

// //   const changeBookingStatus = async (bookingId, status) ////=> {
// //     try {
// //       const { data } = await axios.post('/api/bookings/change-status', { bookingId, status });
// //       if (data.success) {
// //         toast.success(data.message);
// //         fetchOwnerBookings();
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchOwnerBookings();
// //   }, []);

// //   return (
// //     <div className="manage-bookings">
// //       <div className="header-info">
// //         <h2>Manage Bookings</h2>
// //         <p className="subtitle">
// //           Track customer bookings, manage payments, and update reservation statuses.
// //         </p>
// //       </div>

// //       <div className="table-container">
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Car Details</th>
// //               <th>Rental Period</th>
// //               <th>Payment</th>
// //               <th>Total Amount</th>
// //               <th>Status</th>
// //               <th className="text-center">Actions</th>
// //             </tr>
// //           </thead>

// //           <tbody>
// //             {bookings.map((booking) => (
// //               <tr key={booking._id}>
// //                 {/* Car Info with Image */}
// //                 <td className="car-cell">
// //                   <img src={booking.car.image} alt="car" />
// //                   <div>
// //                     <span className="car-name">{booking.car.brand} {booking.car.model}</span>
// //                     <span className="car-id">#{booking._id.slice(-6)}</span>
// //                   </div>
// //                 </td>

// //                 {/* Date Range */}
// //                 <td className="date-cell">
// //                   {booking.pickupDate?.split('T')[0]} 
// //                   <span className="to-arrow"> → </span> 
// //                   {booking.returnDate?.split('T')[0]}
// //                 </td>

// //                 {/* Payment Method - Fixed as Offline */}
// //                 <td>
// //                   <span className="payment-method">Offline</span>
// //                 </td>

// //                 {/* Price */}
// //                 <td className="price-cell">
// //                   <strong>₹{booking.price.toLocaleString()}</strong>
// //                 </td>

// //                 {/* Status Badge */}
// //                 <td>
// //                   <span className={`status-badge ${booking.status}`}>
// //                     {booking.status}
// //                   </span>
// //                 </td>

// //                 {/* Action Buttons */}
// //                 <td className="action-cell">
// //                   {booking.status === 'pending' ? (
// //                     <div className="btn-group">
// //                       <button 
// //                         className="approve-btn"
// //                         onClick={() => changeBookingStatus(booking._id, 'confirmed')}
// //                       >
// //                         Approve
// //                       </button>
// //                       <button 
// //                         className="reject-btn"
// //                         onClick={() => changeBookingStatus(booking._id, 'cancelled')}
// //                       >
// //                         Reject
// //                       </button>
// //                     </div>
// //                   ) : (
// //                     <span className="action-completed">No Actions</span>
// //                   )}
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ManageBookings;
import React, { useEffect, useState } from "react";
import "./ManageBookings.css";
import { useAppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const ManageBookings = () => {
  const { axios } = useAppContext();

  const [bookings, setBookings] = useState([]);

  const fetchOwnerBookings = async () => {
    try {
      const { data } = await axios.get("/api/bookings/owner");

      if (data.success) {
        setBookings(data.bookings);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const changeBookingStatus = async (bookingId, status) => {
    try {
      setBookings((prev) =>
        prev.map((b) =>
          b._id === bookingId ? { ...b, status } : b
        )
      );

      const { data } = await axios.post(
        "/api/bookings/change-status",
        { bookingId, status }
      );

      if (data.success) {
        toast.success(data.message);
        fetchOwnerBookings();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchOwnerBookings();
  }, []);

  return (
    <div className="manage-bookings">

      <h2>Manage Bookings</h2>

      <p className="subtitle">
        Track all customer bookings, approve or cancel requests,
        and manage booking statuses
      </p>

      <div className="booking-card">

        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Car</th>
                <th>Date Range</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {bookings.map((booking) => (

                <tr key={booking._id}>

                  <td className="car-info">
                    <img src={booking.car?.image} alt="" />

                    <span>
                      {booking.car?.brand} {booking.car?.model}
                    </span>
                  </td>

                  <td>
                    {booking.pickupDate?.split("T")[0]} to{" "}
                    {booking.returnDate?.split("T")[0]}
                  </td>

                  <td>₹{booking.price}</td>

                  <td>
                    <span className="payment-tag">
                      Offline
                    </span>
                  </td>

                  <td>
                    <select
                      className={`status-select ${booking.status}`}
                      onChange={(e) =>
                        changeBookingStatus(
                          booking._id,
                          e.target.value
                        )
                      }
                      value={booking.status}
                      disabled={booking.status !== "pending"}
                    >
                      <option value="pending">
                        Pending
                      </option>

                      <option value="cancelled">
                        Cancelled
                      </option>

                      <option value="confirmed">
                        Confirmed
                      </option>
                    </select>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default ManageBookings;
