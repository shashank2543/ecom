import { LOGIN_USER, LOGOUT_USER } from '../actions/types'

const initialState = { email: "", password: "", isLoggedin: false,userDetails:{} };
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case LOGIN_USER:
            let isLoggedin = false;
            let userDetails = {};
            const { email, password } = payload.user
            if (email === "user@gmail.com" && password === "password") {
                isLoggedin = true;
                userDetails.name="Shashank"
            }
            return { ...state, email, password, isLoggedin,userDetails };

        case LOGOUT_USER:
            return { initialState };


        default:
            return state;
    }
}        