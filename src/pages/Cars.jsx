import React, { useState } from "react";
import Title from "../components/Title";
import { assets, } from "../assets/assets";
import "./Cars.css";
import CarCard from "../components/CarCard";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const Cars = () => {
  //getting search params from url

const [searchParams] = useSearchParams()
 const pickupLocation = searchParams.get('pickupLocation')
 const returnDate = searchParams.get('returnDate')
 const pickupDate = searchParams.get('pickupDate')


const{cars,axios} = useAppContext()
  const [input, setInput] = useState("");
const isSearchData = pickupLocation &&pickupDate && returnDate
const[filteredCars,setFilteredCars] = useState([])

// const applyFilter = async() =>{
//   if(input === ''){
// setFilteredCars(cars)
//     return  null
//   }
//   const  filtered = cars.slice().filter((car)=>{
//     return car.brand.toLowerCase().includes(input.toLowerCase()) || car.category.toLowerCase().includes(input.toLowerCase()) ||
//     car.transmission.toLowerCase().includes(input.toLowerCase()) 
//   }) 
//   setFilteredCars(filtered)
// }
const applyFilter = () => {
  if (input === "") {
    setFilteredCars(cars);
    return;
  }

  const filtered = cars.filter((car) =>
    car.brand.toLowerCase().includes(input.toLowerCase()) ||
    (car.category || "").toLowerCase().includes(input.toLowerCase()) ||
    car.transmission.toLowerCase().includes(input.toLowerCase()) ||
    car.model.toLowerCase().includes(input.toLowerCase())
  );

  setFilteredCars(filtered);
};
// const searchCarAvailability = async () =>{
//   const{data} = await axios.post('/api/bookings/check-availability',{location:pickupLocation,pickupDate,returnDate})
//   if(data.success){
//     setFilteredCars(data.availableCars)
//     if(data.availableCars.length === 0){
//       toast('No cars available')
//     }
//     return null
//   }
// }
const searchCarAvailability = async () => {
  try {
    const { data } = await axios.post('/api/bookings/check-availability', {
      location: pickupLocation,
      pickupDate,
      returnDate
    });
      console.log("API DATA:", data);
    console.log("AVAILABLE:", data.availableCars);

    if (data.success) {
      setFilteredCars(data.availableCars || []);

      if (data.availableCars.length === 0) {
        toast("No cars available");
      }
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};
// useEffect(() => {
//   if (!isSearchData) {
//     setFilteredCars(cars);
//   }
// }, [cars]);
// useEffect(() => {
//   if (!isSearchData) {
//     applyFilter();
//   }
// }, [input, cars]);
// useEffect(() => {
//   if (isSearchData) {
//     searchCarAvailability(); // 🔥 yahi missing tha
//   }
// }, [pickupLocation, pickupDate, returnDate]);
useEffect(() => {
  if (isSearchData) {
    searchCarAvailability();
  } else {
    setFilteredCars(cars);
  }
}, [cars, pickupLocation, pickupDate, returnDate]);

  return (
    <div className="cars-page">

      <div className="cars-header">
        <Title
          title="Available Cars"
          subTitle="Browse our selection of premium vehicles available for your next adventure"
        />

        <div className="search-box2">

          <img className="search-icon" src={assets.search_icon} alt="search" />

           <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search by make, model, or features"
            className="search-input1"
          />

          <img className="filter-icon" src={assets.filter_icon} alt="filter" />

        </div>
      </div>

      <div className="cars-container">

        <p className="cars-count">
          Showing {filteredCars.length} Cars
        </p>

        <div className="cars-grid">
          {filteredCars.map((car) => (
            <div key={car._id} className="car-item">
              <CarCard car={car} />
            </div>
          ))}
          {/* {Array.isArray(filteredCars) && filteredCars.length > 0 ? (
  filteredCars.map((car) => (
    <div key={car._id} className="car-item">
      <CarCard car={car} />
    </div>
  ))
) : (
  <p>No Cars Found</p>
)} */}
        </div>

      </div>

    </div>
  );
};

export default Cars;