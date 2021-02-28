import React from 'react';
import ShoppingCart from './shoppingCart.svg'

function Cart(props) {
    return (
        <div>
            <img style={{cursor: 'pointer'}} src={ShoppingCart} alt="" />
        </div>
    );
}

export default Cart;