import axios from 'axios';

import {GET_TYPE} from '../actiontype/ActionType'


//-----------------------------gettype-----------------------------------

export const getType = ()=> async dispatch=>{
    try {
        const res = await axios.get('api/type');
        dispatch({
            type:GET_TYPE,
            payload: res.data
        })
    } catch (error) {
        console.error(error.message);
    }
}
//-----------------------------addtype-----------------------------------
export const addType=(newType)=> (dispatch)=>{
    const config = {
        headers: {
        'x-auth-token': localStorage.getItem('token'),
        },
    };
    axios.post('/api/type/',newType,config)
    .then(res=>dispatch( getType()))
    .catch(Error=>console.log(Error))
}
//--------------------------------deletetype----------------------------
    export const deleteType=(idType)=>(dispatch)=>{
        const config = {
            headers: {
            'x-auth-token': localStorage.getItem('token'),
            },
        };
        axios.delete(`/api/type/delete/${idType}`,config)
        .then(res=>dispatch( getType()))
        .catch(Error=>console.log(Error))
        }

//----------------------------------edittype-----------------------------
    export const editType=(idType,editCat)=>async (dispatch)=>{
       try {
        const config = {
            headers: {
            'x-auth-token': localStorage.getItem('token'),
            },
        };
           const res = await axios.put(`/api/type/edit/${idType}`,editCat,config)
            dispatch( getType())
            
       } catch (error) {
        console.log(error.message)
       }
    }
