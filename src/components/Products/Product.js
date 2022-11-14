import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
   const {img,name,seller,price,stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>

            <div>
            <h4 className='product-name'>{name}</h4>
            <br></br>
            <p><small>By:{seller}</small></p>
            <b></b>
            <p>${price}</p>
            <p> <small> only {stock} left in stock-in order soon</small> </p>
            <button onClick ={()=> props.handleProductAdd(props.product)} className='main-button'><FontAwesomeIcon icon={faShoppingCart} /> Add to card</button>
            </div>
           
        </div>
    );
};

export default Product;