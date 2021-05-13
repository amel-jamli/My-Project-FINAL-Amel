import {useDispatch} from 'react-redux'
import React, {useState} from 'react'

import Modal from 'react-bootstrap/Modal'

import { editUser } from '../../../REDUX/actions/userAction'

import { Button } from 'react-bootstrap';


const UserUpdate =({user})=>{
   const dispatch = useDispatch()


   const [newprofile , setNewprofile]=useState(user)


   const handlechange=(e)=>{
    setNewprofile({...newprofile , [e.target.name]:e.target.value})
    
}

console.log(user)
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
 
   const UPDATE=()=>{
dispatch(editUser(user._id, newprofile))
   
setShow(false)

   }
    return (
        <>



 

  
  
     <Button variant="info"   style={{marginRight:10 }} onClick={handleShow}  style={{ height: 35 }}>✎ </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update your Profile  </Modal.Title>
        </Modal.Header>
        <Modal.Body> 

<input type="text"  value={newprofile.name} name="name" placeholder="your title" onChange={handlechange} />

<input type="text" value={newprofile.email} name='email' placeholder="your email" onChange={handlechange} />

<input type="text" value={newprofile.phone} name='phone' placeholder="your phone" onChange={handlechange} />

<input type="text" value={newprofile.imgUser} name='imgUser' placeholder="your URL img" onChange={handlechange} />


<br/>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={UPDATE}>
          pdate Profile
          </Button>
         
        </Modal.Footer>
      </Modal>  
 
  
    
 



<br/><br/><br/>

        </>
    )
}

export default UserUpdate
