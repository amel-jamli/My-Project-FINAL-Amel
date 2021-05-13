import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { deleteAllUsers} from '../../REDUX/actions/userAction';
import Modal from 'react-bootstrap/Modal'
import { Button , Alert } from 'react-bootstrap';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


 import './Admin.css'

const UserList = ({users}) => {


    const dispatch = useDispatch();

    const delet=(users_id)=>{
        dispatch(deleteAllUsers(users_id))
        }




        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
             Attention !! Delete user
            </Tooltip>
          );
          
         
    
    
          const [show, setShow] = useState(false);
    
          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);
        
    return (
      
            

<figure>
  <img src={users.imgUser} alt="client" />
  <div className="ab">
    <label style={{paddingTop: 5}}> {users.name}</label>

    <div style={{float:"right"}}>




  

    <Button variant="info"   style={{marginRight:10 }} onClick={handleShow}>▲</Button>

   

    <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}>

    <Button variant="danger"className="btn"  onClick={()=>delet(users._id)}>✘</Button>

    </OverlayTrigger>
    
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Information about user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Alert show={show} variant="success" >
    <Alert.Heading>Information</Alert.Heading>
    <p>
     
 
    </p>
    <hr />
    <div style={{textAlign:"left"}}>

    <p><strong>Name user :</strong>  {users.name}</p> 
    <p><strong>Phone user :</strong>  {users.phone}</p>
    <p><strong>Email user: </strong> {users.email}</p> 
   
    </div>
    <hr />
 
    
  </Alert>



        </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>
 
    </div>
  </div>
</figure>

    )
}

export default UserList
