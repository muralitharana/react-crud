import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerItems">
        <h4>Contact</h4>
        <ul>
            <li>Mobile: 9090909090</li>
            <li>E-Mail : abc@gmail.com</li>
        </ul>
        <hr/>
      </div>
      <div className="footerItems">
        <h4>About</h4>
        <ul>
            <li>Super Fast service</li>
            <li>Best Services</li>
        </ul>
        <hr/>
      </div>
      <div className="footerItems">
        <h4>Address</h4>
        <address>
            27/89, abcd street,<br/>
            India
        </address>
        
        <hr/>
      </div>
      
    </div>
  );
};

export default Footer;
