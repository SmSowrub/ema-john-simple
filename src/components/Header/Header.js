import React from 'react';
import logo from '../../ema-john-spa-master/src/images/logo.png'
import './Header.css';

const Header = () => {

    return (
        <div className='header'>
            <img src={logo} alt=""></img>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href='/manege'>Manege Inventory</a>
            </nav>
        </div>
    );
};

export default Header;