import React from "react";
import "./Subscribe.css";
import Title from "./Title";

const Subscribe = () => {
  return (
    <section className="subscribe">
   <Title title="Never Miss a Deal!" subTitle=" Subscribe to get the latest offers, new arrivals, and exclusive discounts"/>
     
      <div className="subscribe-box">
        <input
          type="email"
          placeholder="Enter your email id"
          className="subscribe-input"
          required
        />

        <button className="subscribe-btn">
          Subscribe
        </button>
      </div>

    </section>
  );
};

export default Subscribe;