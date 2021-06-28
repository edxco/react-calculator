import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="header mx-auto mb-5">
      <Link className="text-center" to="/">Math Magicians</Link>
      <nav>
        <Link to="/" className="">Home</Link>
        <Link to="/calculator" className="my-5">Calculator</Link>
        <Link to="/quotes" className="">Quotes</Link>
      </nav>
    </div>
  );
}

export default Navbar;
