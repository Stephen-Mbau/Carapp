import React from 'react'
import Home from './Home';
import About from './About';
import Products from './Products';

function Navbar() {
  return (
    <div style={{background:"brown", color:"#FFF", padding: "20px"}}>
      <Home />
      <About />
    </div>
  );
}

export default Navbar;