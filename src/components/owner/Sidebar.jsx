// import React, { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { assets, ownerMenuLinks } from "../../assets/assets";
// import "./Sidebar.css";
// import { useAppContext } from "../../context/AppContext";
// import { toast } from "react-toastify";

// const Sidebar = () => {
//   const { user, axios, fetchUser } = useAppContext();
//   const location = useLocation();
//   const [image, setImage] = useState(null);

//   // ✅ FIXED: added async
//   const updateImage = async () => {
//     try {
//       if (!image) return;

//       const formData = new FormData();
//       formData.append("image", image);

//       const { data } = await axios.post(
//         "/api/owner/update-image",
//         formData
//       );

//       if (data.success) {
//         fetchUser();
//         toast.success(data.message);
//         setImage(null);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="sidebar">

//       {/* Profile Image */}
//       <div className="sidebar-profile">
//         <label htmlFor="image">
//           <img
//             className="profile-img"
//             src={
//               image
//                 ? URL.createObjectURL(image)
//                 : user?.image || "/default.png"
//             }
//             alt="profile"
//           />

//           <input
//             type="file"
//             id="image"
//             accept="image/*"
//             hidden
//             onChange={(e) => setImage(e.target.files[0])}
//           />

//           <div className="edit-icon">
//             <img src={assets.edit_icon} alt="edit" />
//           </div>
//         </label>

//         {image && (
//           <button className="save-btn" onClick={updateImage}>
//             Save
//             <img src={assets.check_icon} width={13} alt="check" />
//           </button>
//         )}

//         <p className="user-name">{user?.name || "User"}</p>
//       </div>

//       {/* Menu Links */}
//       <div className="sidebar-menu">
//         {ownerMenuLinks.map((link, index) => (
//           <NavLink
//             key={index}
//             to={link.path}
//             className={`menu-link ${
//               location.pathname === link.path ? "active" : ""
//             }`}
//           >
//             <img
//               src={
//                 location.pathname === link.path
//                   ? link.coloredIcon
//                   : link.icon
//               }
//               alt="icon"
//             />
//             <span>{link.name}</span>
//           </NavLink>
//         ))}
//       </div>

//     </div>
//   );
// };

import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { assets, ownerMenuLinks } from "../../assets/assets";
import "./Sidebar.css";
import { useAppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const Sidebar = ({ isOpen, onClose }) => {
  const { user, axios, fetchUser } = useAppContext();
  const location = useLocation();
  const [image, setImage] = useState(null);

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "O";

  const updateImage = async () => {
    try {
      if (!image) return;

      const formData = new FormData();
      formData.append("image", image);

      const { data } = await axios.post("/api/owner/update-image", formData);

      if (data.success) {
        fetchUser();
        toast.success(data.message);
        setImage(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <div className="sidebar-profile">
            <label htmlFor="image">
              {image || user?.image ? (
                <img
                  className="profile-img"
                  src={image ? URL.createObjectURL(image) : user?.image}
                  alt="profile"
                />
              ) : (
                <div className="profile-fallback">{initials}</div>
              )}

              <input
                type="file"
                id="image"
                accept="image/*"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
              />

              <div className="edit-icon">
                <img src={assets.edit_icon} alt="edit" />
              </div>
            </label>

            {image && (
              <button className="save-btn" onClick={updateImage}>
                Save
                <img src={assets.check_icon} width={13} alt="check" />
              </button>
            )}

            <p className="user-name">{user?.name || "Owner"}</p>
            <span className="user-role">Fleet Administrator</span>
          </div>

          <button className="close-sidebar" onClick={onClose} type="button">
            <img src={assets.close_icon} alt="Close menu" />
          </button>
        </div>

        <div className="sidebar-menu">
          {ownerMenuLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={`menu-link ${
                location.pathname === link.path ? "active" : ""
              }`}
              onClick={onClose}
            >
              <img
                src={
                  location.pathname === link.path ? link.coloredIcon : link.icon
                }
                alt={link.name}
              />
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {isOpen && <div className="sidebar-backdrop" onClick={onClose} />}
    </>
  );
};

export default Sidebar;