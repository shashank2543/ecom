import React from 'react'
import Product from "./Product";
import { connect } from 'react-redux';

const ProductList = (props) => {
  const { productList,cartItems } = props;
  return (
    <React.Fragment>

      <div className="container">
        <div className="row">
          {productList && productList.map((product) => <Product key={product.key} product={product} />  )}
        </div>

      </div>

    </React.Fragment>
  )
}




const mapStateToProps = state => ({
  productList: state.product.productList,
  cartItems: state.cart.cartItems,
});


export default connect(mapStateToProps, null)(ProductList);