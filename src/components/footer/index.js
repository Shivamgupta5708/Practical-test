import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-left'>
        <h2 className='footer-brand'>RIGHTFIT.COM</h2>
        <ul className='footer-links'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/all-products'>All Products</a>
          </li>
          <li>
            <a href='/featured-products'>Featured Products</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
          <li>
            <a href='/about'>About Us</a>
          </li>
        </ul>
      </div>
      <div className='footer-center'>
        <p>We are a registered E-Commerce seller and we support a variety of Local and International payment modes</p>
        <div className='payment-logos'>
          <img src='path/to/visa-logo.png' alt='Visa' />
          <img src='path/to/mastercard-logo.png' alt='Mastercard' />
          <img src='path/to/paypal-logo.png' alt='Paypal' />
        </div>
      </div>
      <div className='footer-right'>
        <span>Website protected by</span>
        <div className='social-logos'>
          <img src='path/to/social-logo1.png' alt='Social Logo 1' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
