import React, { useEffect } from "react";
import NavbarOwner from "../../components/owner/NavbarOwner";
import Sidebar from "../../components/owner/Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import { useAppContext } from "../../context/AppContext";

const Layout = () => {
  const{isOwner,navigate} = useAppContext()

  // useEffect(()=>{if(!isOwner){navigate('/')}},[isOwner])


  useEffect(() => {
    if (!isOwner) {
      navigate("/");
    }
  }, [isOwner, navigate]); // ✅ FIX

  // ✅ Optional: prevent UI flicker
  if (!isOwner) return null;

  return (
    <div className="owner-layout">

      <NavbarOwner />

      <div className="owner-body">

        <Sidebar />

        <div className="owner-content">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default Layout;