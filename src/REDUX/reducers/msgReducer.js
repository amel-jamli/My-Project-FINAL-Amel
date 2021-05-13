import { GET_MSG } from "../actiontype/ActionType";

const initState={
    msgs:[],
  
}

const msgReducer= (state = initState, {type,payload} )=>{
    switch (type) {
        case GET_MSG:
            return{
                ...state,
                msgs:payload,
              
            };
        default:
            return state;
    }
};
export default msgReducer;
