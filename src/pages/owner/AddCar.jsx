import React, { useState } from "react";
import "./AddCar.css";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const AddCar = () => {

  const {axios,token} =useAppContext();
  const [image, setImage] = useState(null);

  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: 0,
    category: "",
    transmission: '',
    fuel_type: "",
    seating_capacity: 0,
    location: "",
    description: ""
  });

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value
    });
  };

  const[isloading, setIsLoading] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(car);
    if(isloading) return null

    setIsLoading(true)
    try {
      const formData = new FormData()
      formData.append('image',image)
      formData.append('carData',JSON.stringify(car))

  //  const token = localStorage.getItem("token");

      const {data} = await axios.post('/api/owner/add-car',formData,{
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`, // ✅ important!
      },})
      if(data.success){
        toast.success(data.message)
        setImage(null)
        setCar({
           brand: "",
    model: "",
    year: 0,
    pricePerDay: 0,
    category: "",
    transmission: '',
    fuel_type: "",
    seating_capacity: 0,
    location: "",
    description: ""
        })
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
    finally{
      setIsLoading(false)
    }
  };
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   // prevent double submission
//   if (isloading) return;

//   // check if image is uploaded
//   if (!image) {
//     toast.error("Please upload an image of the car");
//     return;
//   }

//   setIsLoading(true);

//   try {
//     // Prepare FormData
//     const formData = new FormData();
//     formData.append("image", image);
//     formData.append("carData", JSON.stringify(car));

//     // // Send request with Authorization header
//     // const { data } = await axios.post("/api/owner/add-car", formData, {
//     //   headers: {
//     //     "Content-Type": "multipart/form-data",
//     //     Authorization: `Bearer ${token}`, // JWT token from context
//     //   },
//     // });

//     if (data.success) {
//       toast.success(data.message);

//       // reset form
//       setImage(null);
//       setCar({
//         brand: "",
//         model: "",
//         year: 0,
//         pricePerDay: 0,
//         category: "",
//         transmission: "",
//         fuel_type: "",
//         seats: 0,
//         location: "",
//         description: "",
//       });
//     } else {
//       toast.error(data.message);
//     }
//   } catch (error) {
//     console.log(error);
//     toast.error(error.response?.data?.message || error.message);
//   } finally {
//     setIsLoading(false);
//   }
// };
  return (
    <div className="addcar-page">
      <div className="addcar-card">

        <h2>Add New Car</h2>
        <p className="subtitle">
          Fill in details to list a new car for booking, including pricing,
          availability, and car specifications.
        </p>

        <form onSubmit={handleSubmit}>

          {/* Upload Image */}
          <div className="upload-section">

            <label htmlFor="imageUpload" className="upload-box">

              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="preview"
                />
              ) : (
                <>
                  <img src={assets.upload_icon} alt="" />
                  <p>Upload a picture of your car</p>
                </>
              )}

            </label>

            <input
              type="file"
              id="imageUpload"
              hidden
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />

          </div>

          {/* Form Grid */}
          <div className="form-grid">

            <div className="input-group">
              <label>Brand</label>
              <input
                name="brand"
                value={car.brand}
                placeholder="e.g. BMW, Mercedes, Audi..."
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Model</label>
              <input
                name="model"
                value={car.model}
                placeholder="e.g. X5, E-Class, M4..."
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Year</label>
              <input
                name="year"
                type="number"
                value={car.year}
                placeholder="2026"
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Daily Price ($)</label>
              <input
                name="pricePerDay"
                type="number"
                value={car.pricePerDay}
                placeholder="100"
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Category</label>
              <select
                name="category"
                onChange={handleChange}
                value={car.category}
              >
                <option value="">Select a category</option>
                <option value="sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Van">Van</option>
              </select>
            </div>

            <div className="input-group">
              <label>Transmission</label>
              <select
                name="transmission"
                onChange={handleChange}
                value={car.transmission}
              >
                <option value="">Select transmission</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
                <option value="Semi-Automatic">Semi-Automatic</option>
              </select>
            </div>

            <div className="input-group">
              <label>Fuel Type</label>
              <select
                name="fuel_type"
                onChange={handleChange}
                value={car.fuel_type}
              >
                <option value="">Select fuel type</option>
                <option value="Gas">Gas</option>
                <option value="Electric">Electric</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div className="input-group">
              <label>Seating Capacity</label>
              <input
                name="seating_capacity"
                value={car.seating_capacity}
                placeholder="4"
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="input-group full">
            <label>Location</label>
            <input
              name="location"
              value={car.location}
              placeholder="e.g. San Francisco, CA"
              onChange={handleChange}
            />
          </div>

          <div className="input-group full">
            <label>Description</label>
            <textarea
              name="description"
              value={car.description}
              rows="4"
              placeholder="Describe your car..."
              onChange={handleChange}
            />
          </div>

          <button className="submit-btn">
            { isloading?"Listing...":"✓ List Your Car"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default AddCar;