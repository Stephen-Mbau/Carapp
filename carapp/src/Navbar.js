import React from 'react'

function Navbar() {
  const navbarStyle = {
    background: "brown",
    color: "#FFF",
    padding: "20px",
    display: "flex",   
    justifyContent: "flex-end", 
    alignItems: "centre",
    width: "80%", 
    margin: "0 auto"

  };

  const linkStyle = {
    color: "#FFF",
    margin: "0 10px"
  };

  return (
    <div style={navbarStyle}>
      <a href='Home' style={linkStyle}>Home</a>
      <a href='About' style={linkStyle}>About</a>
      <a href='Products' style={linkStyle}>Products</a>
    </div>
  );
}

export default Navbar;