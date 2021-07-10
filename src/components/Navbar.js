import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="topnav">
      <Link to="/" className="active"><strong>React Calculator</strong></Link>
      <Link to="/" className="">Changelog</Link>
      <Link to="/calculator" className="">Calculator</Link>
      <Link to="/credits" className="">Credits</Link>
    </div>
  );
}

export default Navbar;
