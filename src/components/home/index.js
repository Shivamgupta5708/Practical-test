import React from 'react';
import brand from '../../utility/Masthead.png';
import './Home.css';

const Home = () => {
  return (
    <div className='banner'>
      <img src={brand} className='brand-img' alt='brandimg' width='100%' />
    </div>
  );
};

export default Home;
