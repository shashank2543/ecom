import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import CartView from '../page_components/cart/component/cartView';
import { changeQuantity, removeFromCart, placeOrder } from '../actions/cartActions';
import { useHistory } from "react-router-dom";

const Cart = (props) => {
  const history = useHistory();
  const { isLoggedin, changeQuantity, cartItems, removeFromCart, placeOrder } = props;
  const placeOrderCb = () => {
    if (isLoggedin) {
      placeOrder();
    } else {
      history.push('/login')
    }
  }
  return (
    <Fragment>
      <CartView cartItems={cartItems} changeQuantity={changeQuantity} removeFromCart={removeFromCart} placeOrder={placeOrderCb}/>
    </Fragment>
  )
}


const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  isLoggedin: state.auth.isLoggedin
});


export default connect(mapStateToProps, { changeQuantity, removeFromCart, placeOrder })(Cart);