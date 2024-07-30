import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import Filters from '../filter/Filter';
import './ProductList.css';

const ProductList = ({ setCartItemCounter, cartItemCounter, decrementCounter }) => {
  const productListContainerRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const fetchData = async () => {
    try {
      const token = 'Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo';
      const headers = { Authorization: `Bearer ${token}` };

      const [productsRes, colorsRes, materialsRes] = await Promise.all([
        axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products', { headers }),
        axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors', { headers }),
        axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material', { headers }),
      ]);

      setProducts(productsRes.data.products);
      setColors(colorsRes.data.colors);
      setMaterials(materialsRes.data.material);
      setFilteredProducts(productsRes.data.products);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterChange = (filterType, value) => {
    let filtered = [...products];
    if (filterType === 'material' && value !== 'all') {
      filtered = filtered.filter((product) => product.materialId == value);
    }
    if (filterType === 'color' && value !== 'all') {
      filtered = filtered.filter((product) => product.colorId == value);
    }
    setFilteredProducts(filtered);
    setCurrentPage(1);
    console.log({ filterType, value, filtered, products });
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(productListContainerRef?.current?.scrollTop);
  const handleScroll = () => {
    if (productListContainerRef?.current.scrollTop === 0) {
      document.querySelector('.navbar').classList.add('invert');
    } else {
      document.querySelector('.navbar').classList.remove('invert');
    }
  };

  useEffect(() => {
    const productListContainer = productListContainerRef?.current;
    productListContainer?.addEventListener('scroll', handleScroll);
    return () => {
      productListContainer?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='product-list-container' ref={productListContainerRef}>
      <Filters materials={materials} colors={colors} onFilterChange={handleFilterChange} />
      <div className='product-list'>
        {currentProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            setCartItemCounter={setCartItemCounter}
            cartItemCounter={cartItemCounter}
            decrementCounter={decrementCounter}
          />
        ))}
      </div>
      <div className='pagination'>
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
