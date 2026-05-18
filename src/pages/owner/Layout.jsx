import React, { useEffect, useState } from "react";
import NavbarOwner from "../../components/owner/NavbarOwner";
import Sidebar from "../../components/owner/Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import { useAppContext } from "../../context/AppContext";

const Layout = () => {
  const { isOwner, navigate } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isOwner) {
      navigate("/");
    }
  }, [isOwner, navigate]);

  if (!isOwner) return null;

  return (
    <div className={`owner-layout ${mobileMenuOpen ? "menu-open" : ""}`}>
      <NavbarOwner
        onToggleMenu={() => setMobileMenuOpen((prev) => !prev)}
        mobileMenuOpen={mobileMenuOpen}
      />

      <div className="owner-body">
        <Sidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

        <div
          className="owner-content"
          onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;