import { ADD_PRODUCT } from './types';

export const setProducts = (productList) => dispatch => {

    dispatch({
        type: ADD_PRODUCT,
        payload: { productList }

    });
}
