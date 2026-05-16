// import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import MyBookings from "./pages/MyBookings";

import Layout from "./pages/owner/Layout";
import Dashboard from "./pages/owner/Dashboard";
import AddCar from "./pages/owner/AddCar";
import ManageCar from "./pages/owner/ManageCar";
import ManageBookings from "./pages/owner/ManageBookings";
import { ToastContainer } from "react-toastify"; 
import { useAppContext } from "./context/AppContext";
const App = () => {

  const {showLogin} = useAppContext()
  const location = useLocation();

  // Check if current page is dashboard
  const isOwnerPage = location.pathname.startsWith("/owner");

  return (
    <>
      <ToastContainer />
      {/* Login Modal */}
      {showLogin && <Login />}

      {/* Hide Navbar on Dashboard */}
      {!isOwnerPage && <Navbar/>}

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/cars" element={<Cars />} />

        <Route path="/car-details/:id" element={<CarDetails />} />

        <Route path="/my-bookings" element={<MyBookings />} />

        {/* Owner Dashboard Routes */}
        <Route path="/owner" element={<Layout />}>

          <Route index element={<Dashboard />} />

          <Route path="add-car" element={<AddCar />} />

          <Route path="manage-cars" element={<ManageCar />} />

          <Route path="manage-bookings" element={<ManageBookings />} />

        </Route>

      </Routes>

      {/* Hide Footer on Dashboard */}
      {!isOwnerPage && <Footer />}

    </>
  );
};

export default App;