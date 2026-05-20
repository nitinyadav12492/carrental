import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useAppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { axios, isOwner } = useAppContext();

  const [stats, setStats] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    revenue: 0,
  });
  const [recentBookings, setRecentBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/owner/dashboard");
      if (data.success) {
        setStats(data.dashboardData);
        setRecentBookings(data.recentBookings || []);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOwner) {
      fetchDashboardData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOwner]);

  const statItems = [
    {
      label: "Total Cars",
      value: stats.totalCars,
      description: "Fleet size",
    },
    {
      label: "Total Bookings",
      value: stats.totalBookings,
      description: "Bookings made",
    },
    {
      label: "Pending",
      value: stats.pendingBookings,
      description: "Awaiting confirmation",
    },
    {
      label: "Completed",
      value: stats.completedBookings,
      description: "Finished rides",
    },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <span className="eyebrow">Owner Dashboard</span>
          <h1>Modern fleet analytics & management</h1>
          <p className="para">
            Track revenue, bookings, and fleet performance across all devices with
            a premium admin experience.
          </p>
        </div>

        <div className="dashboard-actions">
          <button className="secondary-btn">Quick Reports</button>
          <button className="primary-btn">New Listing</button>
        </div>
      </div>

      <div className="stats-grid">
        {statItems.map((item) => (
          <div key={item.label} className="stat-card">
            <div className="stat-card-head">
              <p>{item.label}</p>
              <span>{item.description}</span>
            </div>
            <h2>{loading ? <span className="loading-pill" /> : item.value}</h2>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <section className="card analytics-card">
          <div className="card-header">
            <div>
              <h3>Revenue pulse</h3>
              <p>Monthly revenue streamed from active bookings.</p>
            </div>
            <div className="revenue-summary">
              <span>₹{loading ? "--" : stats.revenue}</span>
            </div>
          </div>

          <div className="analytics-summary">
            <div>
              <p>Pending</p>
              <strong>{loading ? "--" : stats.pendingBookings}</strong>
            </div>
            <div>
              <p>Completed</p>
              <strong>{loading ? "--" : stats.completedBookings}</strong>
            </div>
          </div>

          <div className="chart-sparkline" aria-hidden="true" />
        </section>

        <section className="card activity-card">
          <div className="card-header">
            <div>
              <h3>Recent bookings</h3>
              <p>Latest customer reservations across your fleet.</p>
            </div>
            <span className="badge">Live stream</span>
          </div>

          <div className="booking-list">
            {loading ? (
              Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="booking-item loading">
                  <div className="booking-left">
                    <span className="loading-line short" />
                    <span className="loading-line" />
                  </div>
                  <div className="booking-right">
                    <span className="loading-pill small" />
                    <span className="loading-pill small" />
                  </div>
                </div>
              ))
            ) : recentBookings.length > 0 ? (
              recentBookings.map((booking, index) => (
                <div key={index} className="booking-item">
                  <div className="booking-left">
                    <p>{booking.car}</p>
                    <span>{booking.date}</span>
                  </div>
                  <div className="booking-right">
                    <span className="amount">₹{booking.price}</span>
                    <span className={`status ${booking.status?.toLowerCase()}`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <p>No recent bookings available yet.</p>
              </div>
            )}
          </div>
        </section>
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