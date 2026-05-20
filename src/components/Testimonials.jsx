import React from "react";
import "./Testimonials.css";
import { assets } from "../assets/assets";
import Title from "./Title";

const Testimonials = () => {
   const reviews = [
    {
      name: "Rohan",
      location: "Rewari",
      image: assets.testimonial_image_1,
      review:
        "I've rented cars from various companies, but the experience with CarRental was exceptional.",
    },
    {
      name: "Amarjeet",
      location: "Bhiwadi",
      image: assets.testimonial_image_2,
      review:
        "CarRental made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!",
    },
    {
      name: "Praveen",
      location: "Jaipur",
      image: assets.testimonial_image_2,
      review:
        "I highly recommend CarRental! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent service.",
    },
  ];
  return (
    <section className="testimonials">

     <Title title="What Our Customers Say" subTitle="Discover why discerning travelers choose StayVenture for their luxury
          accommodations around the world."/>
     
     {/* <div className="testimonial-title"></div> */}

      <div className="testimonial-cards">
        {reviews.map((item, index) => (
          <div className="testimonial-card" key={index}>

            <div className="testimonial-user">
              <img src={item.image} alt="" />
              <div>
                <h3>{item.name}</h3>
                <span>{item.location}</span>
              </div>
            </div>

          <div className="stars">
              {Array(5).fill(0).map((_, starIndex) => (
                <img key={starIndex} src={assets.star_icon} alt="star" />
              ))}
            </div>

            <p className="review">"{item.review}"</p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Testimonials;