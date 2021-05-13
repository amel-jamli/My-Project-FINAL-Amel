import { combineReducers } from 'redux';

import userReducer from './userReducer';
import SubventionReducer from './SubventionReducer';
import typeReducer from './typeReducer';
import msgReducer from './msgReducer'


export default combineReducers({ userReducer,SubventionReducer, typeReducer, msgReducer});
