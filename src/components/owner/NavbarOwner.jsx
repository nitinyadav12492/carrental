import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./NavbarOwner.css";
import { useAppContext } from "../../context/AppContext";

const NavbarOwner = ({ onToggleMenu, mobileMenuOpen }) => {
  const { user } = useAppContext();

  return (
    <div className="navbar-owner">
      <div className="navbar-owner-left">
        <button className="menu-toggle" onClick={onToggleMenu} aria-label="Toggle navigation">
          <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`} />
        </button>

        <Link to="/owner" className="owner-logo-wrapper">
          <img className="owner-logo" src={assets.logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar-owner-right">
        <div className="owner-welcome">
          <p className="welcome-text">
            Welcome back, <span>{user?.name || "Owner"}</span>
          </p>
          <span className="owner-badge">Admin Panel</span>
        </div>

        <img
          className="owner-profile"
          src={user?.image || ""}
          alt={user?.name ? `${user.name}'s profile` : "profile"}
        />
      </div>
    </div>
  );
};

export default NavbarOwner;