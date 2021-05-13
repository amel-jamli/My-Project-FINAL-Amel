import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';

import { getAllUsers } from '../../REDUX/actions/userAction';
import { getType } from '../../REDUX/actions/typeAction';
import { getSubvention } from '../../REDUX/actions/SubventionAction';
import {getmsg} from '../../REDUX/actions/MsgAction'
// import AddSubvention from './subvention/AddSubvention';

import TypeList from './type/TypeList';
import SubventionList from './subvention/SubventionList';
import UserList from './UserList';

import AddType from './type/AddType';
import MsgList from './Msg/MsgList';

const Panel = () => {

const dispatch = useDispatch();

useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getType());
    dispatch(getSubvention())
    dispatch(getmsg())


}, [])

const user = useSelector(state => state.userReducer.user);
const users = useSelector(state => state.userReducer.users.users);
const subventions = useSelector(state => state.SubventionReducer.subventions.subvention);
const types = useSelector(state => state.typeReducer.types.type);
const msgs = useSelector (state=> state.msgReducer.msgs.msg)

    return (
        // (!user)?<p>you dont have any user</p>:
        <div >
              <hr/>
            <h3>LIST OF MESSAGES</h3>
            <hr/>

{ msgs && msgs.map(msg=>  <MsgList key={msg._id} msg={msg}/>)}

            <hr/>
            <h3>LIST OF USERS</h3>
            <hr/>
       <div className="outil3">
         
       {users && users.map(users=> <UserList key={users._id} users={users}/>)}
      </div>
     
        <div >
        <div >
           <hr/>
           <h3>LIST OF TYPE</h3>
          
           <hr/>
           <br/>
             <AddType/>
             <br/>
        </div>
            
       {types && types.map(type=> <TypeList key={type._id} type={type}/>)}
     
        </div>
        <br/><br/>
        <div>
    <div >
        <hr/>
       <h3>LIST OF SUBVENTION</h3>
   
  <hr/>
  <br/>
        {/* <AddSubvention types={types}/> */}
        <br/>
        </div>
  
       {subventions && subventions.map(subvention=> <SubventionList key={subvention._id} subvention={subvention} types={types}/>)}
     <br/> <br/> <br/>
        </div>
        
        </div>
    )
}

export default Panel
