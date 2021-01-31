import { ADD_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from './types';

export const setProducts = (productList) => dispatch => {

    dispatch({
        type: ADD_PRODUCT,
        payload: { productList }

    });
}
