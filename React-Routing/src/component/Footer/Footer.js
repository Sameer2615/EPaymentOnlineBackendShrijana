import React from 'react';
import"./../Footer/Footer.css";
import { Link } from 'react-router-dom';
// import {Link} from "react-scroll";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
      {/* <p>heloo</p> */}
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <p>Whatsapp: +977 9864463468</p>
        <p>Viber:+977 9864463468</p>
        <p>Phone:01-5581224</p>
        <p>Email: epay@gmail.com</p>
    
      </div>
      <div className="footer-section">
        <h3>Locations</h3>
        <p>Location 1:<br />Siddhipur,Lalitpur<br /></p>
        <p>Location 2:<br />Balkumari,Lalitpur<br /></p>
      </div>
      <div className="footer-section">
        <h3>Policy</h3>
        <Link to="/AboutLeadG2" ><p>About Us</p></Link>
       
        <Link to="/Home"><p>Privacy Policies</p></Link>
         <Link to="/Home"><p>Terms and Security Policies</p></Link>
      </div>
      <div className="footer-bottom">
        <h6>© 2024 E-Payment Private Limited. All Rights Reserved</h6>
      </div>
    </footer>
  );
};

export default Footer;
