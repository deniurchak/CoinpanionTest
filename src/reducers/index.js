import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import loginStatusReducer from './loginStatusReducer';

export default combineReducers(
    {
        login: loginReducer,
        userStatus: loginStatusReducer
    }
)

