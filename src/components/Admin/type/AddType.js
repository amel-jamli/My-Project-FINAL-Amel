import React,{useState} from 'react'
import { Button } from 'reactstrap';
import {useDispatch,useSelector} from 'react-redux';



import Modal from 'react-bootstrap/Modal'





import { addType } from '../../../REDUX/actions/typeAction';

function AddType() {
    
    const [name, setName] = useState("");

    const [description, setDescription] = useState("");
   
    const dispatch = useDispatch();


const add=()=>{
    dispatch(addType({name,description}))
    setName('')
    setDescription('')
    setShow(false)
};




const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    return (
<div>




<Button variant="info"   style={{marginRight:10 }} onClick={handleShow}>Add type </Button>


<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>New Type</Modal.Title>
  </Modal.Header>
  <Modal.Body> 

 
                    <input   value={name} onChange={(e)=>setName(e.target.value)} type="text"   name="name"   id="name" 
                    placeholder="Name " 
                    />
      
      
                  
       
                  
                    <input   value={description}  onChange={(e)=>setDescription(e.target.value)} type="text"  name="Description"  id="Description" 
                    placeholder="Description" 
                    />
<br/>



  </Modal.Body>
  <Modal.Footer>
   
    <Button variant="secondary" onClick={add}>
    ADD
    </Button>

  </Modal.Footer>
</Modal>  




</div>
);
};

export default AddType
