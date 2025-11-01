import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333" }}>
      <Link style={{ color: "#fff", marginRight: "15px" }} to="/">Home</Link>
      <Link style={{ color: "#fff", marginRight: "15px" }} to="/about">About</Link>
      <Link style={{ color: "#fff" }} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
