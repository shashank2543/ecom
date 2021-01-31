import React, { useEffect } from 'react'
import ProductCard from "../modules/itemCard/productCard";
import { connect } from 'react-redux';
import { setProducts } from '../actions/productAction'
import { addToCart, removeFromCart } from "../actions/cartActions";
import { storeProducts } from '../static_data/data'
const Home = (props) => {
    const { productList = [], setProducts, cartItems, addToCart, removeFromCart } = props;
    useEffect(() => {
        if (productList && productList.length === 0) {
            setProducts(storeProducts);
        }
    }, [])

    return (
        <React.Fragment>

            <div className="container">
                <div className="row">
                    {productList && productList.map((product) => <ProductCard addToCart={addToCart} removeFromCart={removeFromCart} key={product.key} product={product} inCart={cartItems[product.id] ? true : false} />)}
                </div>

            </div>

        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    productList: state.product.productList,
    cartItems: state.cart.cartItems
});


export default connect(mapStateToProps, { setProducts, addToCart, removeFromCart })(Home);