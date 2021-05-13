import axios from 'axios';
import {GET_SUBVENTION} from '../actiontype/ActionType'

//----------------------------getsubvention---------------------------
export const getSubvention=()=>(dispatch)=>{
axios.get('/api/subvention')
.then(res=>dispatch({type:GET_SUBVENTION,payload:res.data}))
.catch(Error=>console.log(Error))
}

//----------------------------getsubventionBytype---------------------------
export const getSubventionType=(typeid)=>(dispatch)=>{
axios.get(`/api/subvention/${typeid}`)
.then(res=>dispatch({type:GET_SUBVENTION,payload:res.data}))
.catch(Error=>console.log(Error))
}

//-----------------------------addsubvention-----------------------------------
export const addSubvention=(newSubvention )=> (dispatch)=>{
    const config = {
        headers: {
        'x-auth-token': localStorage.getItem('token'),
        },
    };
    axios.post('/api/subvention/add',newSubvention,config)
   
    .then(res=>dispatch( getSubvention()))
 
    .catch(Error=>console.log(Error))
}
//--------------------------------deletesubvention----------------------------
    export const deleteSubvention=(idSubvention)=>(dispatch)=>{
        const config = {
            headers: {
            'x-auth-token': localStorage.getItem('token'),
            },
        };
        axios.delete(`/api/Subvention/delete/${idSubvention}`,config)
        .then(res=>dispatch( getSubvention()))
        .catch(Error=>console.log(Error))
        }

//----------------------------------editsubvention-----------------------------
    export const editSubvention=(idSubvention,editedPort)=>async (dispatch)=>{
    try {
        const config = {
            headers: {
            'x-auth-token': localStorage.getItem('token'),
            },
        };
        const res = await axios.put(`/api/subvention/edit/${idSubvention}`,editedPort,config)
            dispatch( getSubvention())
            
    } catch (error) {
        console.log(error.message)
    }
    }


    //----------------------------filtersubvention---------------------------
export const filterSubvention=(userid)=>(dispatch)=>{
    axios.get(`/api/subvention/filter/${userid}`)
    .then(res=>dispatch({type:GET_SUBVENTION,payload:res.data}))
    .catch(Error=>console.log(Error))
    }
    
