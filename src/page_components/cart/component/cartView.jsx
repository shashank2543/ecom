import React, { Fragment } from 'react'
import _ from 'lodash';
import CartContainer from './sub_components/cartContainer';
import CheckoutSummary from './sub_components/checkoutSummary';
import './style.scss'

const CartView = ({cartItems,changeQuantity,removeFromCart,placeOrder}) => {
    if(_.isEmpty(cartItems)){
        return null;
    }

    return (
        <div className="cart-view-container">
            <CartContainer cartItems={cartItems} changeQuantity={changeQuantity} removeFromCart={removeFromCart} placeOrder={placeOrder} />
            <CheckoutSummary cartItems={cartItems}  />
        </div>
    )
}

export default CartView;
