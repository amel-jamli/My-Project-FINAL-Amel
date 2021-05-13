import { GET_TYPE } from "../actiontype/ActionType";

const initState={
    types:[],
   
}

const typeReducer = (state = initState, {type,payload} )=>{
    switch (type) {
        case GET_TYPE:
            return{
                ...state,
                types:payload,
             
            };
        default:
            return state;
    }
};
export default typeReducer;
