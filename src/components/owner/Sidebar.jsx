// // import React, { useState } from "react";
// // import { NavLink, useLocation } from "react-router-dom";
// // import { assets,  ownerMenuLinks } from "../../assets/assets";
// // import "./Sidebar.css";
// // import { useAppContext } from "../../context/AppContext";

// // const Sidebar = () => {

// //   const {user,axios,fetchUser} = useAppContext()
// //   const location = useLocation();
// //   const [image, setImage] = useState('');

// //   const updateImage = () => {
// //     try {
// //       const formData=new FormData()
// //       formData.append('image',image)
// //       const{data} = await axios.post('/api/owner/update-image',formData)
// //       if(data.success){
// //         fetchUser()
// //         toast.success(data.message)
// //         setImage('')
// //       }else{
// //         toast.error(data.message)
// //       }

// //     } catch (error) {
// //       toast.error(error.message)
// //     }
// //   };

// //   return (
// //     <div className="sidebar">

// //       {/* Profile Image */}
// //       <div className="sidebar-profile">

// //         <label htmlFor="image">

// //           <img
// //             className="profile-img"
// //             src={image ? URL.createObjectURL(image) : user?.image}
// //             alt="profile"
// //           />

// //           <input
// //             type="file"
// //             id="image"
// //             accept="image/*"
// //             hidden
// //             onChange={(e) => setImage(e.target.files[0])}
// //           />

// //           <div className="edit-icon">
// //             <img src={assets.edit_icon} alt="edit" />
// //           </div>

// //         </label>

// //         {image && (
// //           <button className="save-btn" onClick={updateImage}>
// //             Save
// //             <img src={assets.check_icon} width={13} alt="" />
// //           </button>
// //         )}

// //         <p className="user-name">{user?.name}</p>

// //       </div>

// //       {/* Menu Links */}
// //       <div className="sidebar-menu">

// //         {ownerMenuLinks.map((link, index) => (
// //           <NavLink
// //             key={index}
// //             to={link.path}
// //             className={`menu-link ${
// //               location.pathname === link.path ? "active" : ""
// //             }`}
// //           >

// //             <img
// //               src={
// //                 location.pathname === link.path
// //                   ? link.coloredIcon
// //                   : link.icon
// //               }
// //               alt=""
// //             />

// //             <span>{link.name}</span>

// //           </NavLink>
// //         ))}

// //       </div>

// //     </div>
// //   );
// // };

// // export default Sidebar;
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

const Sidebar = () => {
  const { user, axios, fetchUser } = useAppContext();
  const location = useLocation();
  const [image, setImage] = useState(null);

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
    <div className="sidebar">
      {/* Profile Image Section */}
      <div className="sidebar-profile">
        <label htmlFor="image">
          {/* <img
            className="profile-img"
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image || assets.profile_img // Fallback to asset if user image is missing
            }
            alt="profile"
          /> */}
    <img
  className="profile-img"
  src={
    image
      ? URL.createObjectURL(image)
      : user?.image || assets.profile_img || null
  }
  alt="profile"
/>
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

        <p className="user-name">{user?.name || "User"}</p>
      </div>

      {/* Menu Links Section */}
      <div className="sidebar-menu">
        {ownerMenuLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={`menu-link ${
              location.pathname === link.path ? "active" : ""
            }`}
          >
            <img
              src={
                location.pathname === link.path ? link.coloredIcon : link.icon
              }
              alt="icon"
            />
            <span>{link.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

 export default Sidebar;