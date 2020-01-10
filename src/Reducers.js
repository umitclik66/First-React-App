import {combineReducers} from 'redux';
import LoginReducer from './reducers/LoginReducer';

const Reducers =combineReducers({
    login:LoginReducer
});

export  default Reducers;