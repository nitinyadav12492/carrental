import React, { useEffect, useState } from "react";
import "./ManageCars.css";

import { useAppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const ManageCars = () => {

  const{isOwner,axios,fetchCars} = useAppContext()

const [cars, setCars] = useState([]);

const fetchOwnerCars = async () => {
  try {
    const {data} = await axios.get('/api/owner/cars')
    if(data.success){
      setCars(data.cars)
    }else{
      toast.error(data.message)
    }
  } catch (error) {
    toast.error(error.message)
  }
};
const toggleAvailability = async (carId) => {
  try {
    const {data} = await axios.post('/api/owner/toggle-car',{carId})
    if(data.success){
      toast.success(data.message)
      fetchOwnerCars()
      fetchCars()
    }else{
      toast.error(data.message)
    }
  } catch (error) {
    toast.error(error.message)
  }
};
const deleteCar = async (carId) => {
  try {
    const confirm =window.confirm("Are you sure you want to delet this cars?")
    if(!confirm) return null
    const {data} = await axios.post('/api/owner/delete-car',{carId})
    if(data.success){
      toast.success(data.message)
      fetchOwnerCars()
      fetchCars()
    }else{
      toast.error(data.message)
    }
  } catch (error) {
    toast.error(error.message)
  }
};

useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
 isOwner && fetchOwnerCars();
}, [isOwner]);

// const deleteCar = (id) => {
//   setCars((prevCars) => prevCars.filter((cars) => cars._id !== id));
// };

return (

<div className="managecars">

<h2>Manage Cars</h2>

<p className="subtitle">
View all listed cars, update their details, or remove them from the booking platform
</p>

<div className="table-card">

<table>

<thead>
<tr>
<th>Car</th>
<th>Category</th>
<th>Price</th>
<th>Status</th>
<th>Actions</th>
</tr>
</thead>


<tbody>
  {cars.map((car) => (
    <tr key={car._id}>
      <td className="car-infoo">
        <img src={car?.image} alt="" />
        <div>
          <h4>{car.brand} {car.model}</h4>
          <p>{car.seating_capacity} • {car.transmission}</p>
        </div>
      </td>
      <td>
  <div className="category-box">
    <span className="main-cat">{car.category}</span>
    <span className="sub-cat">Luxury</span>
  </div>
</td>
      
      <td>₹{car.pricePerDay}/day</td>
      <td>
        <span className={`status ${car.isAvailable ? "bg-green" : "bg-red"}`}>
          {car.isAvailable ? "Available" : "Unavailable"}
        </span>
      </td>
      <td className="actions">
        <button onClick={() => toggleAvailability(car._id)} className="view-btn">👁</button>
        <button className="delete-btn" onClick={() => deleteCar(car._id)}>🗑</button>
      </td>
    </tr>
  ))}
</tbody>
</table>

</div>

</div>

);
};

export default ManageCars;