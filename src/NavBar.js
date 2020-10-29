import React from 'react';
import {Link} from 'react-router-dom';


function NavBar() {
  return (
    <div>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/about'>AboutUs</Link>
        <br />
        <Link to='/product'>Product</Link>
    </div>
  );
}

export default NavBar;