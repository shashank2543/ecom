import {combineReducers} from 'redux';
import product from './product'
import auth from './auth'
import cart from './cart'
export default combineReducers({
    product,auth,cart
});