import {useDispatch} from 'react-redux'
import React, {useState} from 'react'
import { Form, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from 'react-bootstrap';

import { addmsg } from '../../../REDUX/actions/MsgAction'




import './user.css'

const UserSendMsg =({email})=>{
   

    const [newmsg , setNewmsg]=useState({})

    const handlechange=(e)=>{
        setNewmsg({...newmsg , emailU , [e.target.name]:e.target.value})
        
    }
    const dispatch = useDispatch()

   const emailU = email 
 



    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
 

   const SendMSG=()=>{

    dispatch(addmsg(newmsg))
    toggle()
 

   }
    return (
        <>

<Button variant="success" onClick={toggle} style={{ height: 35 }}  >✉</Button>

      <Modal isOpen={modal} toggle={toggle} className="">
        <ModalHeader toggle={toggle}>New Message</ModalHeader>
        <ModalBody>
        <Form 
        >
  <input type="text" name="title" placeholder="your title" onChange={handlechange}/>

<input type="text" name='desc' placeholder="your desc" onChange={handlechange}/>
<br/>


         

          
      
        </Form>
        
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={SendMSG}>Send</Button>{' '}
       
        </ModalFooter>
      </Modal>
<br/><br/><br/>

        </>
    )
}

export default UserSendMsg
