import './App.css';
import Navbar from './components/header';
import Home from './components/home';
import ProductList from './components/productlist';
import Footer from './components/footer';
import { useState } from 'react';

function App() {
  const [cartItemCounter, setCartItemCounterr] = useState(0);

  const setCartItemCounter = () => {
    setCartItemCounterr(cartItemCounter + 1);
  };

  const decrementCounter = () => {
    if (cartItemCounter > 0) {
      setCartItemCounterr(cartItemCounter - 1);
    }
  };

  return (
    <div>
      <Navbar cartItemCounter={cartItemCounter} />
      <Home />
      <ProductList
        setCartItemCounter={setCartItemCounter}
        cartItemCounter={cartItemCounter}
        decrementCounter={decrementCounter}
      />
      <Footer />
    </div>
  );
}

export default App;
