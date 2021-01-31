import React from "react";
import CartItem from "../../../../modules/itemCard/cartItem";
import _ from "lodash";
import '../style.scss';
const CartContainer = ({ wrapperClass='',cartItems, changeQuantity,removeFromCart,placeOrder }) => {
  if (_.isEmpty(cartItems)) {
    return null;
  }

  const checkout = () => {
      placeOrder();
  };

  return (
    <div className={`order-details ${wrapperClass}`}>
      {cartItems &&
        Object.keys(cartItems).map((item) => (
          <CartItem
            changeQuantity={changeQuantity}
            product={cartItems[item]}
            removeItemFromCart={removeFromCart}
          ></CartItem>
        ))}
      <div className="btn-div-wrapper">
        <button className="place-order-btn" type="button" onClick={(e) => checkout()}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartContainer;
