
import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from './types';


export const addToCart = (product) => dispatch => {
    console.log("here")
    dispatch({
        type: ADD_TO_CART,
        payload: product

    });
}

export const removeFromCart = (product) => dispatch => {

    dispatch({
        type: REMOVE_FROM_CART,
        payload: product

    });
}

export const changeQuantity = (product, flag) => dispatch => {

    dispatch({
        type: CHANGE_QUANTITY,
        payload: { product, flag }

    });
}