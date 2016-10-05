// import {createReducer} from '../utils';
// import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER} from '../constants';
// import {pushState} from 'redux-router';
import jwtDecode from 'jwt-decode';

const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null
};

export default function loginning(state = initialState, action) {

    switch (action.type){
        case 'LOGIN_USER_REQUEST':
            return {...state,isAuthenticating:true,statusText:null}
        case 'LOGIN_USER_SUCCESS':
            return {...state,
                isAuthenticating:false,
                isAuthenticated:true,
                token:action.payload.token,
                userName:jwtDecode(action.payload.token).userName,
                statusText:'You have been successfully logged in'}
        case 'LOGIN_USER_FAILURE':
            return {...state,statusText:action.payload}
        case 'LOGOUT_USER':
            return state
        case 'LOGIN_SUCCESS':
            console.log(action.payload)
            return {...state,isAuthenticated:true,token:action.payload}
        default:
            return state
    }


}