// import React, { useState } from "react";
// import { assets, menuLinks } from "../assets/assets";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "./Navbar.css";
// import { useAppContext } from "../context/AppContext";
// import { toast } from "react-toastify"; // ✅ added

// const Navbar = () => {
//   console.log("Navbar Loaded");
//   const { setShowLogin, user, logout, isOwner, axios, setIsOwner } = useAppContext();

//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   // const ChangeRole = async () => {
//   //   try {
//   //     const { data } = await axios.post("/api/owner/change-role");

//   //     if (data.success) {
//   //       setIsOwner(true);
//   //       toast.success(data.message);
//   //     } else {
//   //       toast.error(data.error);
//   //     }
//   //   } catch (error) {
//   //     toast.error(error.message || "Something went wrong"); // ✅ fixed
//   //   }
//   // };
//   const ChangeRole = async () => {
//   console.log("Button clicked"); // 👈 add this
//   try {
//     const { data } = await axios.post("/api/owner/change-role");
//     console.log(data); // 👈 check response

//     if (data.success) {
//       setIsOwner(true);
//       toast.success(data.message);
//     } else {
//       toast.error(data.message);
//     }

//   } catch (error) {
//     console.log(error.response);
//     toast.error(error.response?.data?.message);
//   }
// };
// console.log("USER:", user);

//   return (
//     <div className={`navbar ${location.pathname === "/" ? "bg-light" : ""}`}>

//       {/* Logo */}
//       <div className="logo">
//         <Link to="/">
//           <img src={assets.logo} alt="logo" />
//         </Link>
//       </div>

//       {/* Menu Links */}
//       <div className={`mid ${menuOpen ? "active" : ""}`}>
//         {menuLinks.map((links, index) => (
//           <Link key={index} to={links.path}>
//             {links.name}
//           </Link>
//         ))}

//         {/* Mobile Buttons */}
//          <div className="mobile-btn"> 
//           <button onClick={() => navigate("/owner")}>Dashboard</button>
//           <button onClick={() => setShowLogin(true)}>Login</button>
//         </div>
//       </div> 

//       {/* Right Section */}
//       <div className="right " >

//         <div className="search-box-nav1">
//           <input className='snnn' type="text" placeholder="Search car" />
//           <img src={assets.search_icon} alt="search" />
//         </div>

//         <div className="btn">
//           <button
//             onClick={() => {
//               isOwner ? navigate("/owner"):ChangeRole();}}>
//             {isOwner ? "Dashboard" : "List cars"}
//           </button>

//           <button
//   onClick={() => {
//     user? logout():setShowLogin(true);
    
//   }}
// >
//   {user ? "Logout" : "Login"}
// </button>
//         </div>

//       </div>

//       {/* Mobile Menu Button */}
//       <div
//         className="menu-toggle"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         ☰
//       </div>

//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { setShowLogin, user, logout, isOwner } = useAppContext();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`navbar1 ${location.pathname === "/" ? "bg-light" : ""}`}>

      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={assets.logo} alt="logo" />
        </Link>
      </div>

      {/* Menu Links */}
      <div className={`mid ${menuOpen ? "active" : ""}`}>
        {menuLinks.map((links, index) => (
          <Link key={index} to={links.path}>
            {links.name}
          </Link>
        ))}

        {/* Mobile Buttons */}
        <div className="mobile-btn"> 
          {isOwner && <button onClick={() => navigate("/owner")}>Dashboard</button>}
          <button onClick={() => setShowLogin(true)}>Login</button>
        </div>
      </div> 

      {/* Right Section */}
      <div className="right">
        <div className="search-box-nav1">
          <input className='snnn' type="text" placeholder="Search car" />
          <img src={assets.search_icon} alt="search" />
        </div>

        <div className="btn">
          <button
            onClick={() => {
              if (isOwner) {
                navigate("/owner"); // Owner dashboard
              } else {
                navigate("/request-owner"); // Normal user → request page
                toast.info("You need to become an owner to list cars");
              }
            }}
          >
            {isOwner ? "Dashboard" : "List Cars"}
          </button>

          <button
            onClick={() => {
              user ? logout() : setShowLogin(true);
            }}
          >
            {user ? "Logout" : "Login"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </div>
  );
};

export default Navbar;