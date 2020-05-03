import { combineReducers } from 'redux';
import currentUser from './currentUser';
import error from './error';
import movies from './movies';

const rootReducer = combineReducers({ currentUser, error, movies });

export default rootReducer;
