import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useAppContext } from "../../context/AppContext";
import { toast } from "react-toastify";


const Dashboard = () => {

  const {axios,isOwner} = useAppContext()
 

  const [stats, setStats] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    revenue: 0,
  });

  const [recentBookings, setRecentBookings] = useState([]);


 const fetchDashboardData = async () => {
  try {
    const { data } = await axios.get('/api/owner/dashboard');
    if (data.success) {
      setStats(data.dashboardData);          // update stats
      setRecentBookings(data.recentBookings || []);  // update bookings if backend sends
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
}

   useEffect(()=>{
    if(isOwner){
       
      fetchDashboardData()
    }
    
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[isOwner])


  
  return (
    <div className="dashboard-page">

      {/* Header */}
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Monitor platform performance and bookings</p>
      </div>

      {/* Stats */}
      <div className="stats-grid">

        <div className="stat-card">
          <p>Total Cars</p>
          <h2>{stats.totalCars}</h2>
        </div>

        <div className="stat-card">
          <p>Total Bookings</p>
          <h2>{stats.totalBookings}</h2>
        </div>

        <div className="stat-card">
          <p>Pending Bookings</p>
          <h2>{stats.pendingBookings}</h2>
        </div>

        <div className="stat-card">
          <p>Completed Bookings</p>
          <h2>{stats.completedBookings}</h2>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="dashboard-bottom">

        {/* Recent Bookings */}
        <div className="recent-bookings">

          <h3>Recent Bookings</h3>

          {recentBookings.map((booking, index) => (
            <div key={index} className="booking-item">

              <div>
                <p>{booking.car}</p>
                <span>{booking.date}</span>
              </div>

              <div className="booking-right">
                <span>₹{booking.price}</span>
                <span className={`status ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </span>
              </div>

            </div>
          ))}

        </div>

        {/* Revenue */}
        <div className="revenue-card">
          <h3>Monthly Revenue</h3>
          <h1>₹{stats.revenue}</h1>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;

// // import React, { useEffect, useState } from "react";
// // import "./Dashboard.css";
// // import { useAppContext } from "../../context/AppContext";
// // import { toast } from "react-toastify";

// // const Dashboard = () => {
// //   const { axios, isOwner } = useAppContext();

// //   const [stats, setStats] = useState({
// //     totalCars: 0,
// //     totalBookings: 0,
// //     pendingBookings: 0,
// //     completedBookings: 0,
// //     revenue: 0,
// //   });

// //   const [recentBookings, setRecentBookings] = useState([]);

// //   // ✅ Fetch real data
// //   const fetchDashboardData = async () => {
// //     try {
// //       const { data } = await axios.get("/api/owner/dashboard");

// //       if (data.success) {
// //         setStats(data.dashboardData);              // ✅ FIX
// //         setRecentBookings(data.recentBookings);    // ✅ if backend sends it
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     if (isOwner) {
// //       // eslint-disable-next-line react-hooks/set-state-in-effect
// //       fetchDashboardData();
// //     }
// //   }, [isOwner]);

// //   return (
// //     <div className="dashboard-page">

// //       {/* Header */}
// //       <div className="dashboard-header">
// //         <h1>Admin Dashboard</h1>
// //         <p>Monitor platform performance and bookings</p>
// //       </div>

// //       {/* Stats */}
// //       <div className="stats-grid">

// //         <div className="stat-card">
// //           <p>Total Cars</p>
// //           <h2>{stats.totalCars}</h2>
// //         </div>

// //         <div className="stat-card">
// //           <p>Total Bookings</p>
// //           <h2>{stats.totalBookings}</h2>
// //         </div>

// //         <div className="stat-card">
// //           <p>Pending Bookings</p>
// //           <h2>{stats.pendingBookings}</h2>
// //         </div>

// //         <div className="stat-card">
// //           <p>Completed Bookings</p>
// //           <h2>{stats.completedBookings}</h2>
// //         </div>

// //       </div>

// //       {/* Bottom Section */}
// //       <div className="dashboard-bottom">

// //         {/* Recent Bookings */}
// //         <div className="recent-bookings">
// //           <h3>Recent Bookings</h3>

// //           {recentBookings.length > 0 ? (
// //             recentBookings.map((booking, index) => (
// //               <div key={index} className="booking-item">

// //                 <div>
// //                   <p>{booking.car}</p>
// //                   <span>{booking.date}</span>
// //                 </div>

// //                 <div className="booking-right">
// //                   <span>${booking.price}</span>
// //                   <span className={`status ${booking.status?.toLowerCase()}`}>
// //                     {booking.status}
// //                   </span>
// //                 </div>

// //               </div>
// //             ))
// //           ) : (
// //             <p>No recent bookings</p>
// //           )}
// //         </div>

// //         {/* Revenue */}
// //         <div className="revenue-card">
// //           <h3>Monthly Revenue</h3>
// //           <h1>${stats.revenue}</h1>
// //         </div>

// //       </div>

// //     </div>
// //   );
// // };

// // export default Dashboard;
// import React, { useEffect, useState } from "react";
// import "./Dashboard.css";
// import { useAppContext } from "../../context/AppContext";
// import { toast } from "react-toastify";

// const Dashboard = () => {
//   const { axios, isOwner } = useAppContext();

//   const [stats, setStats] = useState({
//     totalCars: 0,
//     totalBookings: 0,
//     pendingBookings: 0,
//     completedBookings: 0,
//     revenue: 0,
//   });

//   const [recentBookings, setRecentBookings] = useState([]);

//   const fetchDashboardData = async () => {
//     try {
//       const { data } = await axios.get("/api/owner/dashboard");
//       if (data.success) {
//         setStats(data.dashboardData);
//         setRecentBookings(data.bookings || []); // backend se populated bookings
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (isOwner) {
//       fetchDashboardData();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isOwner]);

//   return (
//     <div className="dashboard-page">
//       {/* Header */}
//       <div className="dashboard-header">
//         <h1>Owner Dashboard</h1>
//         <p>Monitor your cars and bookings</p>
//       </div>

//       {/* Stats */}
//       <div className="stats-grid">
//         <div className="stat-card">
//           <p>Total Cars</p>
//           <h2>{stats.totalCars}</h2>
//         </div>
//         <div className="stat-card">
//           <p>Total Bookings</p>
//           <h2>{stats.totalBookings}</h2>
//         </div>
//         <div className="stat-card">
//           <p>Pending Bookings</p>
//           <h2>{stats.pendingBookings}</h2>
//         </div>
//         <div className="stat-card">
//           <p>Completed Bookings</p>
//           <h2>{stats.completedBookings}</h2>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="dashboard-bottom">
//         {/* Recent Bookings */}
//         <div className="recent-bookings">
//           <h3>Recent Bookings</h3>

//           {recentBookings.length === 0 && <p>No bookings yet</p>}

//           {recentBookings.map((booking, index) => (
//             <div key={booking._id} className="booking-item">
//               <div>
//                 <p>
//                   Car: {booking.car?.brand} {booking.car?.model}
//                 </p>
//                 <p>
//                   User: {booking.user?.name} ({booking.user?.email})
//                 </p>
//               </div>

//               <div className="booking-right">
//                 <p>Status: <span className={`status ${booking.status.toLowerCase()}`}>{booking.status}</span></p>
//                 <p>Price: ₹{booking.price}</p>
//                 <p>
//                   Pickup: {booking.pickupDate?.split("T")[0]} <br />
//                   Return: {booking.returnDate?.split("T")[0]}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Revenue */}
//         <div className="revenue-card">
//           <h3>Monthly Revenue</h3>
//           <h1>₹{stats.revenue}</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;