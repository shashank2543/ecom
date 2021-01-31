import { ADD_PRODUCT, ADD_TO_CART,REMOVE_FROM_CART,CHANGE_QUANTITY } from '../actions/types'
import { v4 as uuidv4 } from 'uuid';

const initialState = {totaProductCount:0,productList:[]};
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case ADD_PRODUCT:
            const productList = payload.productList.map((item)=> {
                item.key = uuidv4();

                return (item);
            })
            return { ...state, productList };

        default:
            return state;
    }
}