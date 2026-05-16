import React from "react";
import "./Footer.css";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="fss">
<footer className="footer">

      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={assets.logo} alt="logo" />
           
          </div>

          <p>
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>

          <div className="footer-socials">
            <a href=""><img src={assets.facebook_logo} alt="" /></a>
           <a href=""> <img src={assets.instagram_logo} alt="" /></a>
            <a href=""><img src={assets.twitter_logo} alt="" /></a>
            <a href=""><img src={assets.gmail_logo} alt="" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links"> 
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Browse Cars</a></li>
            <li><a href="">List Your Car</a></li>
            <li><a href="">About Us</a></li>
          </ul>
         
        </div>

        {/* Resources */}
        <div className="footer-links">
          <h3>RESOURCES</h3>
          <ul>
            <li><a href="">Help Center</a></li>
            <li><a href="">Terms of Service</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Insurance</a></li>
          </ul>
          
        </div>

        {/* Contact */}
        <div className="footer-links">
          <h3>CONTACT</h3>
          <p>1234 Luxury Drive</p>
          <p>San Francisco, CA 94107</p>
          <p>+1 234 567890</p>
          
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2026 Brand. All rights reserved.</p>

        <div className="footer-policy">
          <span>Privacy</span>
          <span>|</span>
          <span>Terms</span>
          <span>|</span>
          <span>Cookies</span>
        </div>
      </div>

    </footer>
    </div>
    
  );
};

export default Footer;