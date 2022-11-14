import React from 'react';
import Product from '../Products/Product';

const Cart = (props) => {
    const cart =props.cart

   // const total=cart.reduce((total,prd)=>total+prd.price,0);

    let total=0;

    for (let i = 0; i < cart.length; i++) {
        const prd= cart[i];
        total=total+prd.price;
    }

    let shipping= 0 ;
    if (total > 35){
        shipping = 0;
    }

    else if (total > 15) {
        shipping=4.99;
    } 
    else if (total > 0){
        shipping=12.49
    }

    const vat=(total/5).toFixed(2);
    const getAdd=(total+shipping+Number(vat)).toFixed(2);

    const productPrice=num=>{
        const price=(num).toFixed(2);
        return price;
    }

    return (
        <div>
             <h2>Order Summary</h2>
            <h3>Items : {cart.length}</h3>
            <h5>Product Price : ${productPrice(total)}</h5>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p><small>VAT+TEX : {vat}</small></p>
            <h4>Total Price : ${getAdd}</h4>
        </div>
    );
};

export default Cart;