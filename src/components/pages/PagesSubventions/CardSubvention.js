import React,{useState , useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import { Button , Alert } from 'react-bootstrap';

import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'



import './subvention.css'


const Cardsubvention=({subvention})=> {
   
    const dispatch = useDispatch()
 

    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
       {subvention.desc}
      </Tooltip>
    );
    
 

      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

    
    return (

      

<figure>
<OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}>

  <img src={subvention.imgUrl} alt="client" />
  </OverlayTrigger>
  <div className="ab">
    <label style={{paddingTop: 5}}> {subvention.name}</label>

    <div style={{float:"right"}}>


   



  

    <Button variant="info"   style={{marginRight:10 }} onClick={handleShow}>▲</Button>

  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Alert show={show} variant="success" >
    <Alert.Heading>{subvention.name}</Alert.Heading>
    <p>
     
 
    </p>
    <hr />
    <div style={{textAlign:"left"}}>

    <p><strong>Name user :</strong> {subvention.nameU}  </p> 
   <p><strong>Phone user :</strong> {subvention.phoneU} </p>
    <p><strong>Email user: </strong> {subvention.emailU}</p> 
   
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

export default Cardsubvention;
