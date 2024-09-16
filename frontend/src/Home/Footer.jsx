import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-copywrite-text">
        <div className="footer-text-one">
          <p>Copyright &copy; 2019</p>
          <p>HodlInfo.com</p>
        </div>
        <div className="footer-text-two">
          <p>Support</p>
        </div>
      </div>
      <div className="footer-btn-container">
        <button className="footer-btn">Add HodlInfo to home screen</button>
      </div>
    </div>
  );
};

export default Footer;
