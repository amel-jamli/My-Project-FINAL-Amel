import {LOGIN_USER,REGISTER_USER,LOGOUT_USER, CURRENT_USER, FAIL_USER, GET_ALLUSERS} from '../actiontype/ActionType';
  
  const initialState = {
    token: localStorage.getItem('token'), 
    user: null,
    isAuth: false,
    users:[]
  };
  
  const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
  
      case REGISTER_USER:
      case LOGIN_USER:
        localStorage.setItem('token', payload.token);
        return {
          ...state,
           isAuth: true,
           ...payload, // user:payload.user
         
        };
        case CURRENT_USER:
          return {
              ...state,
                isAuth: true,
              ...payload, // user:payload.user
              
          };
        case GET_ALLUSERS:
        return {
          ...state,
          users:payload,
        };
      case FAIL_USER:
      case LOGOUT_USER:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuth: false,
          user: null,
     
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
