
import { ADD_TO_CART, REMOVE_FROM_CART,CLEAR_CART,CHANGE_QUANTITY, PLACE_ORDER } from '../actions/types'

const initialState = {
    cartItems: {},
    cartCount:0,
    successOrder:[]
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_TO_CART:
            state["cartItems"][payload.id] = payload;
            state["cartItems"][payload.id].quantity = 1;
            state.cartCount++;
            return JSON.parse(JSON.stringify(state));
        case REMOVE_FROM_CART:
            delete state["cartItems"][payload.id];
            state.cartCount-=payload.quantity;
            return JSON.parse(JSON.stringify(state));
        case CHANGE_QUANTITY:{
            const {product,flag} = payload;
            if(flag){
                state["cartItems"][product.id].quantity++;
                state.cartCount++;
            }else{
                state["cartItems"][product.id].quantity--;
                state.cartCount--;
            }
            return JSON.parse(JSON.stringify(state));
        }
        case PLACE_ORDER :{
            const {successOrder,cartItems} = state;
            successOrder.push(cartItems)
            return {...state,successOrder,cartItems:{},cartCount:0}
        }
        case CLEAR_CART:{
            return initialState;
        }
        default:
            return state;
    }
}