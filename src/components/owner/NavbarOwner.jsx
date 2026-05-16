import React from "react";
import { Link } from "react-router-dom";
import { assets,} from "../../assets/assets";
import "./NavbarOwner.css";
import { useAppContext } from "../../context/AppContext";

const NavbarOwner = () => {

  const {user} = useAppContext()

  return (
    <div className="navbar-owner">

      <div className="navbar-owner-left">
        <Link to="/">
          <img className="owner-logo" src={assets.logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar-owner-right">
        <p className="welcome-text">
          Welcome, <span>{user?.name || "Owner"}</span>
        </p>

        <img
          className="owner-profile"
          src={user?.image}
          alt="profile"
        />
      </div>

    </div>
  );
};

export default NavbarOwner;