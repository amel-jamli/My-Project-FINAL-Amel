import React,{useEffect, useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { deletemsg } from '../../../REDUX/actions/MsgAction';

import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { Button, Alert } from 'react-bootstrap';
// import { filterUser } from '../../../REDUX/actions/userAction';



const MsgList = ({msg}) => {
  const dispatch = useDispatch()


  // useEffect(() => {
  //   dispatch(filterUser(msg.user))
  
  // }, []);
 
  // const users = useSelector(state => state.userReducer.users.users);


  const delet=()=>{ 
    dispatch(deletemsg(msg._id))
    }

    const [show, setShow] = useState(false);


    return (
      <>


<Card style={{ width: '50rem' , textAlign:"center",  margin: "auto" }}>
  <Card.Header className="deux"> {msg.title} {!show && <Button variant="warning" onClick={() => setShow(true)} style={{width:50}}>✉</Button>}</Card.Header>
  <ListGroup variant="flush">
  
  
 

<div style={{width:900 , display : "flex"}}>



</div  >
    <Alert show={show} variant="success" >
    <Alert.Heading></Alert.Heading>
    <strong> Description :</strong>
  
   <br/>
 <div className="puttext" >
   
   
   {msg.desc}
   
  
   </div>

   <br/>
   <hr/>
    <div style={{textAlign:"left"}}>
    <p><strong> User email :</strong>   {msg.emailU}</p>
    {/* {users.name} */}
    <p><strong> Send at :</strong>   {msg.sendAt}</p>
   
    </div>
 



 
    <hr />
 
    <div className="d-flex justify-content-end">
      <Button onClick={() => setShow(false)} variant="info"  >
      ▲
     
      </Button>
     

      <Button  variant="danger" onClick={delet}>
      ✘
      </Button>

    </div>
  </Alert>


      

  </ListGroup>
</Card>


</>
    )
}

export default MsgList
