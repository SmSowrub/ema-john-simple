import React, { useState } from 'react';
import fakeData from '../../ema-john-spa-master/src/fakeData';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';


const Shop = () => {
    //console.log(fakeData)
  const firstTin=fakeData.slice(0,10);
  const [products,setProducts]=useState(firstTin);
  const [cart,setCart]=useState([]);

  const handleProductAdd=(product)=>{
    console.log(product);
    const add=[...cart,product];
    setCart(add)

  }
    return (
       <div className='shop-container'>
         <div className='products-container'>
                {
                    products.map(product=><Product product={product} handleProductAdd={handleProductAdd}></Product>)
                }
        </div>
        <div className='shop-card'>
          <Cart cart={cart}></Cart>
        </div>
       </div>
    );
};

export default Shop;