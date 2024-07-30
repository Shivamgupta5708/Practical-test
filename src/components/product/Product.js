import React, { useEffect, useState } from 'react';
import './Product.css';

const Product = ({ product, setCartItemCounter, cartItemCounter, decrementCounter }) => {
  const [showModal, setShowMOdal] = useState(false);

  const updateModal = () => {
    setCartItemCounter();
    setShowMOdal(!showModal);
  };

  useEffect(() => {
    if (cartItemCounter < 1) {
      setShowMOdal(false);
    }
  }, [cartItemCounter]);

  return (
    <div className='product-card'>
      <div onClick={updateModal} className='product-card-hover'>
        Add to cart
      </div>
      <img src={product.image} alt={product.name} className='product-image' />
      <div className='product-details'>
        <h3>{product.name}</h3>
        <p>Color: {product.color}</p>
        <p>Fabric: {product.material}</p>
        <p>INR {product.price}</p>
      </div>

      {showModal && (
        <div className='drawer'>
          <h4>Cart : {cartItemCounter}</h4>
          <h2>Shooping Cart</h2>
          <div className='product-card'>
            <div onClick={setCartItemCounter} className='product-card-hover'>
              Add to cart
            </div>
            <img src={product.image} alt={product.name} className='product-image' />
            <div className='product-details'>
              <h3>{product.name}</h3>
              <p>Color: {product.color}</p>
              <p>Fabric: {product.material}</p>
              <p>INR {product.price}</p>
            </div>
          </div>
          <button onClick={decrementCounter} className='btn-remove'>
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
