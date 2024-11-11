// src/common/ContactUs.jsx
import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import logo from '../../assets/Load.jpg';

const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <div className="contact-logo-circle">
        <img src={logo} alt="Hotel Logo" className="contact-hotel-logo" />
      </div>
      <h2 className="contact-hotel-name">Vrundavan Hotel</h2>
      <h4 className="contact-owner-name">Owner: Rakesh Gavade</h4>
      <p className="contact-number">Call: 8007302600 / 7588273517</p>
      <div className="contact-social-media-links">
        <a href="https://www.instagram.com/vrndaavnraahnnyaaciiuttm/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="contact-social-icon" />
        </a>
        <a href="https://www.facebook.com/people/%E0%A4%B5%E0%A5%83%E0%A4%82%E0%A4%A6%E0%A4%BE%E0%A4%B5%E0%A4%A8-%E0%A4%B0%E0%A4%BE%E0%A4%B9%E0%A4%A3%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%9A%E0%A5%80-%E0%A4%89%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A4%AE-%E0%A4%B8%E0%A5%8B%E0%A4%AF/pfbid0y5SveZTyCgQSdKc2rGr6nH2yvgTC6YzzpM4QHAmZT9R8KEE77wGzepfBFPD7xTkXl/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="contact-social-icon" />
        </a>
      </div>
      <div className="contact-map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d607.8340081268202!2d73.19184053097457!3d17.483289550003228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9f1b4ab1cad6f%3A0x813f152e3956b6ce!2sVrundavan%20best-%20guest%20House%20Guhagar!5e0!3m2!1sen!2sin!4v1730376019932!5m2!1sen!2sin" 
          width="100%" 
          height="250" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <style jsx>{`
        .contact-us-section {
          text-align: center;
          padding: 20px;
          background-color: #f8f9fa; /* Light background */
          border-radius: 10px;
          margin: 20px 0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
        }
        .contact-logo-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto;
          border: 3px solid #007bff; /* Border color */
        }
        .contact-hotel-logo {
          width: 100%;
          height: auto;
          object-fit: cover; /* Ensures the logo fits well */
        }
        .contact-hotel-name {
          margin-top: 15px;
          font-size: 2rem;
          font-weight: bold;
          color: #343a40; /* Darker text for contrast */
        }
        .contact-owner-name,
        .contact-number {
          margin: 5px 0;
          color: #6c757d; /* Gray color for secondary text */
        }
        .contact-social-media-links {
          margin-top: 15px;
        }
        .contact-social-icon {
          font-size: 28px;
          margin: 0 15px;
          color: #007bff; /* Icon color */
          transition: color 0.3s; /* Smooth transition for hover effect */
        }
        .contact-social-icon:hover {
          color: #0056b3; /* Icon hover color */
        }
        .contact-map-container {
          margin-top: 20px;
          border-radius: 10px;
          overflow: hidden; /* Rounded corners for the map */
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Shadow for the map */
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
