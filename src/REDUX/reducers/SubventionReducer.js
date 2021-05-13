import { GET_SUBVENTION} from "../actiontype/ActionType";

const initState={
    subventions:[],
};

export const SubventionReducer= (state = initState, {type,payload} )=>{
    switch (type) {
        case GET_SUBVENTION:
            return{
                ...state,
                subventions:payload,
            };
       

        default:
            return state;
    }
};
export default SubventionReducer;
