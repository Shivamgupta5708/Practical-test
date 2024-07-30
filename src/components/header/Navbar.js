import React from 'react';
import './Navbar.css';

const Navbar = ({ cartItemCounter }) => {
  console.log(cartItemCounter);
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <Typography className='brand'>RIGHTFIT.COM</Typography>
      </div>
      <div className='navbar-right'>
        All Products
        <div className='nav-link'>Featured Products</div>
        <div className='nav-link cart-link'>
          <span>Cart</span>
          <span className='cart-count'>{cartItemCounter}</span>
        </div>
      </div>
    </nav>
  );
};

const Typography = ({ className, children }) => <div className={className}>{children}</div>;

export default Navbar;
