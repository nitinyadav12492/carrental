import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY;

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [cars, setCars] = useState([]);

  // Fetch user
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/data");

      if (data.success) {
        setUser(data.user);
        setIsOwner(data.user.role === "owner");
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Fetch cars
  const fetchCars = async () => {
    try {
      const { data } = await axios.get("/api/user/cars");

      data.success ? setCars(data.cars) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsOwner(false);
    axios.defaults.headers.common["Authorization"] = "";
    toast.success("You have been logged out");
  };

  // Get token from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToken(token);
    fetchCars(); // ✅ fixed
  }, []);

  // Fetch user when token exists
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = ` Bearer ${token}`;
      fetchUser();
    }
  }, [token]);

  const value = {
    navigate,
    currency,
    axios,
    user,
    setUser,
    token,
    setToken,
    isOwner,
    setIsOwner,
    fetchUser,
    showLogin,
    setShowLogin,
    logout,
    fetchCars,
    cars,
    setCars,
    pickupDate,
    returnDate,
    setReturnDate,
    setPickupDate,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
export const useAppContext = () => {
  return useContext(AppContext);
};