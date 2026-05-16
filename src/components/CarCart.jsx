import React from 'react';
import './CarCart.css';
import { Users, Fuel, Briefcase, MapPin } from 'lucide-react';

const CarCart = () => {
  return (
    <div className="car-card">
      <div className="image-container">
        <img 
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop" 
          alt="BMW M4" 
          className="main-car-img"
        />
        <div className="status-badge">Available Now</div>
        <div className="price-overlay">
          <span className="price-val">$130</span>
          <span className="price-unit"> / day</span>
        </div>
      </div>

      <div className="content-section">
        <h2 className="car-name">Toyota Corolla</h2>
        <p className="car-meta">Sedan • 2021</p>

        <div className="specs-grid">
          <div className="spec-item">
            <Users className="spec-icon" size={22} strokeWidth={1.5} />
            <span>4 Seats</span>
          </div>
          <div className="spec-item">
            <Fuel className="spec-icon" size={22} strokeWidth={1.5} />
            <span>Diesel</span>
          </div>
          <div className="spec-item">
            <Briefcase className="spec-icon" size={22} strokeWidth={1.5} />
            <span>Automatic</span>
          </div>
          <div className="spec-item">
            <MapPin className="spec-icon" size={22} strokeWidth={1.5} />
            <span>Los Angeles</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCart;