import React from 'react';
import {Link} from 'react-router-dom';
import Shoes from './../Shoes.json';

function Product() {
  console.log(Object.keys(Shoes))
  return (
   
    <div>
        <h1>Welcome to Product</h1>
        <div className='productcontainer'>
          {Object.keys(Shoes).map(keyName=>{
            const shoe = Shoes[keyName];
            return(<Link key={keyName} className='link' to={`/product/${keyName}`}>
              <h2>{shoe.name}</h2>
              <img src={shoe.img} height={150} alt='shoe'/>
            </Link>)
          })}

        </div>

    </div>
  );
}

export default Product;