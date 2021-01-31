
import { ADD_TO_CART, REMOVE_FROM_CART,CLEAR_CART } from '../actions/types'

const initialState = {
    cartItems: {},
    cartCount:0
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_TO_CART:
            state["cartItems"][payload.id] = payload;
            state.cartCount++;
            return JSON.parse(JSON.stringify(state));
        case REMOVE_FROM_CART:
            delete state["cartItems"][payload.id];
            state.cartCount--
            return JSON.parse(JSON.stringify(state));
        case CLEAR_CART:{
            return initialState;
        }
        default:
            return state;
    }
}