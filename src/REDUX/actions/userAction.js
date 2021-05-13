import axios from 'axios';
import { LOGIN_USER,REGISTER_USER,LOGOUT_USER,CURRENT_USER,FAIL_USER,GET_ALLUSERS} from '../actiontype/ActionType';



//------------------------------------- Register USer---------------------------------------------
export const registerUser = (newUser) => async (dispatch) => {
 
  try {
    const res = await axios.post('/api/user/register', newUser);
    dispatch({
      type: REGISTER_USER,
      payload: res.data, // { msg, user, token }
    });
  } catch (error) {
    
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));

  }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: FAIL_USER,
    });
    
  }
};
//----------------------------------------get user------------------------------------------
export const getAllUsers=()=>async (dispatch)=>{
  try {
    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    };
    const res=await axios.get('api/user/alluser',config);
    dispatch({
      type: GET_ALLUSERS,
      payload: res.data, // {user: req.user}
    });
  } catch (error) {
    dispatch({
      type: FAIL_USER,
    });
  }
};
 //-----------------------------------delete user--------------------------------- 

export const deleteAllUsers=(idUser)=>(dispatch)=>{
  const config = {
      headers: {
      'x-auth-token': localStorage.getItem('token'),
      },
  };
  axios.delete(`api/user/delete/${idUser}`,config)
  .then(res=>dispatch(getAllUsers()))
  .catch(Error=>console.log(Error))
  }
  

//---------------------------------------- Login User----------------------------------------
export const loginUser = (formData) => async (dispatch) => {
 

  try {
    const res = await axios.post('/api/user/login', formData);
    dispatch({ type: LOGIN_USER, payload: res.data,  });
  } catch (error) {
    
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err)=>alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: FAIL_USER,
    });
  }
};

//------------------------------------------ current user-----------------------------------------
export const CurrentUser = () => async (dispatch) => {


  try {
    
    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    };
   
    const res = await axios.get('/api/user/user', config);
    dispatch({ type: CURRENT_USER, payload: res.data,  });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAIL_USER,
    });
  }
};


//-----------------------------logout-----------------------------------
export const logout = () => (dispatch) => {
  dispatch({  type: LOGOUT_USER, });
};

//----------------------------------edituser-----------------------------
export const editUser=(iduser,editU)=>async (dispatch)=>{
  try {
   const config = {
       headers: {
       'x-auth-token': localStorage.getItem('token'),
       },
   };
      const res = await axios.put(`/api/user/edit/${iduser}`,editU,config)
       dispatch( getAllUsers())
       
  } catch (error) {
   console.log(error.message)
  }
}

 //----------------------------filteruser---------------------------
  export const filterUser=(subid)=>async(dispatch)=>{
      try {
        const config = {
            headers: {
            'x-auth-token': localStorage.getItem('token'),
            },
        };
           const res = await axios.get(`/api/user/filter/${subid}`,config)
            dispatch( getAllUsers())
            
       } catch (error) {
        console.log(error.message)
       }
     }
   
    
      
