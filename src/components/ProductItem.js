import React from 'react';
import {useParams} from 'react-router-dom';
import Shoes from './../Shoes.json';

function ProductItem() {
  const {id} = useParams();
  const shoe = Shoes[id];

  if (!shoe)
      return <h2>Product Not Found</h2>
  return (
    <div>
        <h1>Welcome to Product Items</h1>
        <div className='link'>
              <h2>{shoe.name}</h2>
              <img src={shoe.img} height={500} alt='shoe'/>
        </div>

    </div>
  );
}

export default ProductItem;