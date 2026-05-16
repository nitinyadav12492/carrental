import React, { useState } from "react";
import "./Login.css";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Login = () => {

  const { setShowLogin, axios, setToken, navigate, setUser,} = useAppContext();

  const [isSignup, setIsSignup] = useState(false);

  // ✅ form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
 

  try {
     event.preventDefault();
    const state = isSignup ? "register" : "login";

    const { data } = await axios.post(`/api/user/${state}`, {
      name,
      email,
      password
    });

    console.log("API Response:", data); // ✅ debug

    if (data.success) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setUser(data.user);   
      setShowLogin(false);
// await fetchUser();
      

      // navigate("/"); // ✅ redirect
      navigate(data.user.role === "owner" ? "/owner" : "/");

      toast.success("Login Success");
      
    } else {
      toast.error(data.message);
    }

  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};

  return (

    <div className="login-overlay">

      <div className="login-box">

        <span
          className="close-btn"
          onClick={() => setShowLogin(false)}
        >
          ✕
        </span>

        <h2>
          <span className="blue">
            {isSignup ? "Create" : "User"}
          </span> {isSignup ? "Account" : "Login"}
        </h2>

        {/* ✅ form connected */}
        <form onSubmit={onSubmitHandler}>

          {isSignup && (
            <>
              <label>Name</label>
              <input
                type="text"
                placeholder="type here"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </>
          )}

          <label>Email</label>
          <input
            type="email"
            placeholder="type here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="type here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <p className="toggle-text">
            {isSignup ? "Already have an account?" : "Create an account?"}

            <span onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? " Login here" : " click here"}
            </span>
          </p>

          <button type="submit">
            {isSignup ? "Sign Up" : "Login"}
          </button>

        </form>

      </div>

    </div>

  );
};

export default Login;

// import React, { useState } from "react";
// import "./Login.css";

// const Login = () => {
//   const [state, setState] = useState("login");

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="container" on>
//       <form onSubmit={handleSubmit} className="form-box">
//         <h1 className="title">
//           {state === "login" ? "Login" : "Sign up"}
//         </h1>

//         <p className="subtitle">Please sign in to continue</p>

//         {state !== "login" && (
//           <div className="input-box">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         )}

//         <div className="input-box">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email id"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="input-box">
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="forgot">
//           <button type="button">Forget password?</button>
//         </div>

//         <button type="submit" className="submit-btn">
//           {state === "login" ? "Login" : "Sign up"}
//         </button>

//         <p
//           onClick={() =>
//             setState((prev) =>
//               prev === "login" ? "register" : "login"
//             )
//           }
//           className="toggle-text"
//         >
//           {state === "login"
//             ? "Don't have an account?"
//             : "Already have an account?"}
//           <span> click here</span>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;