import login from "../api/login"
import {LOGIN,SIGN_IN,SIGN_OUT} from './types'

export const tryLogIn = formValues => async dispatch => {
    const response = await login.post('/login',formValues)
    dispatch({type: LOGIN, payload: response.data})
}

export const signIn = (userId) => {
    return {type:SIGN_IN, payload: userId}
}

export const signOut = () => {
    return {type:SIGN_OUT}
}

