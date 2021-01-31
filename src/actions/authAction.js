import { LOGIN_USER, LOGOUT_USER } from './types';

export const loginUser = (user) => dispatch => {
    dispatch({
        type: LOGIN_USER,
        payload: { user }

    });
}

export const logoutUser = (user) => dispatch => {
    dispatch({
        type: LOGOUT_USER,
        payload: { user }

    });

}