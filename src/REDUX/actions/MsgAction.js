import axios from 'axios';

import {GET_MSG} from '../actiontype/ActionType'


//-----------------------------getmessage-----------------------------------

export const getmsg = ()=> async dispatch=>{
    try {
        const res = await axios.get('api/msg');
        dispatch({
            type:GET_MSG,
            payload: res.data
        })
    } catch (error) {
        console.error(error.message);
    }
}
//-----------------------------addtype-----------------------------------
export const addmsg=(newMsg)=> (dispatch)=>{
    const config = {
        headers: {
        'x-auth-token': localStorage.getItem('token'),
        },
    };
    axios.post('/api/msg/',newMsg,config)
    .then(res=>dispatch( getmsg()))
    .catch(Error=>console.log(Error))
}
//--------------------------------deletetype----------------------------
    export const deletemsg=(idMsg)=>(dispatch)=>{
        const config = {
            headers: {
            'x-auth-token': localStorage.getItem('token'),
            },
        };
        axios.delete(`/api/msg/delete/${idMsg}`,config)
        .then(res=>dispatch( getmsg()))
        .catch(Error=>console.log(Error))
        }
