import React, { useState } from 'react';
import fakeData from '../../ema-john-spa-master/src/fakeData';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
    console.log(fakeData)
  const firstTin=fakeData.slice(0,10);
  const [products,setProducts]=useState(firstTin);
    return (
       <div className='shop-container'>
         <div className='products-container'>
                {
                    products.map(product=><Product product={product}></Product>)
                }
        </div>
        <div className='shop-card'>
            <h2>This is card</h2>
        </div>
       </div>
    );
};

export default Shop;