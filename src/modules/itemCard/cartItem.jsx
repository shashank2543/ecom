import React from "react";
import _ from "lodash";
import "./style.scss";
import { Fragment } from "react";

const CartItem = (props) => {
  const { product, changeQuantity, removeItemFromCart } = props;
  const incDecQuantity = (flag) => {
    if (!flag && product.quantity === 1) {
      return;
    }
    changeQuantity(product, flag);
  };

  const removeItem = () => {
    if (_.isFunction(removeItemFromCart)) {
      removeItemFromCart(product);
    }
  };

  const increment = (props) => {
    return (
      <div className="change-quantity">
        <button
          type="button"
          onClick={(e) => incDecQuantity(false)}
          className="btn btn-success btn-wrapper"
        >
          -
        </button>
        <span className="count">{product.quantity}</span>
        <button
          type="button"
          onClick={(e) => incDecQuantity(true)}
          className="btn btn-success btn-wrapper"
        >
          +
        </button>

        <button
          type="button"
          onClick={(e) => removeItem()}
          className="btn btn-success btn-wrapper btn-remove"
        >
          Remove
        </button>
      </div>
    );
  };

  const calculateDiscount = (actualPrice,discountPrice) => {
    let percent = ((actualPrice-discountPrice)/actualPrice)*100;
    return parseInt(percent)
  };

  return (
    <div className="cart-container">
      <div className="product-overview">
        <img className="product-img" src={product.productImg} />
        <div className="product-desc">
          <span>{product.title}</span>
          <div>
            <span className="disc-price">
              <span>&#8377;</span>
              {product.price}
            </span>
            {product.actualPrice > product.price && (
              <Fragment>
                <span className="actual-price"> <span>&#8377;</span>{product.actualPrice}</span>
                <span className="discount-percent">{`${calculateDiscount(product.actualPrice,product.price)} % off`}</span>
              </Fragment>
            )}
          </div>
        </div>
      </div>
      {increment()}
    </div>
  );
};

export default CartItem;
