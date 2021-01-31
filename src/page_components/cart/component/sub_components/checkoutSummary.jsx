import React, { useState, useEffect } from "react";
import "../style.scss";
const CheckoutSummary = ({ cartItems = {}, wrapperClass = "" }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const calulatePrice = () => {
    let actualPrice = 0;
    let postDiscountPrice = 0;
    Object.keys(cartItems).forEach((item) => {
      actualPrice += cartItems[item].actualPrice*cartItems[item].quantity;
      postDiscountPrice += cartItems[item].price*cartItems[item].quantity;
    });
    return { actualPrice, postDiscountPrice };
  };

  useEffect(() => {
    const { actualPrice, postDiscountPrice } = calulatePrice();
    setPrice(actualPrice);
    setDiscount(actualPrice - postDiscountPrice);
    setTotal(postDiscountPrice);
  }, [cartItems]);
  return (
    <div className={`checkout-container ${wrapperClass}`}>
      <div className="checkout-heading">Price Details</div>
      <div className="price">
        <span>Price</span>
        <span>
          {" "}
          <span>&#8377;</span>
          {price}
        </span>
      </div>
      <div className="discount">
        <span>Discount</span>
        <span>
          -<span>&#8377;</span>
          {`${discount}`}
        </span>
      </div>
      <div className="total-amount">
        <span>Total</span>
        <span>
          {" "}
          <span>&#8377;</span>
          {total}
        </span>
      </div>
    </div>
  );
};

export default CheckoutSummary;
