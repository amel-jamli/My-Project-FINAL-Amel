import React,{useState} from 'react'
import { Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addSubvention } from '../../../../REDUX/actions/SubventionAction';


function AddSubvention({types , client  }) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [desc, setDesc] = useState("");
    const [type, setType] = useState("");
  
const user = client._id
const nameU = client.name
const phoneU = client.phone
const emailU = client.email


    const dispatch = useDispatch();
const add=()=>{
    dispatch(addSubvention({name,imgUrl,desc,type,  user , nameU , phoneU , emailU}))
   
    toggle()
    setName('');
    setImgUrl('');
    setDesc('')
    setType('')
    history.push('/');
   
};
const history = useHistory();
    return (
<div>

<Button color="info" onClick={toggle}>✎</Button>
      <Modal isOpen={modal} toggle={toggle} className="">
        <ModalHeader toggle={toggle}>New Subvention</ModalHeader>
        <ModalBody>
        <Form 
        >
        <FormGroup >
                   
                    <input 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Name subvention" 
                    />
        </FormGroup>
        <FormGroup>
                  
                    <input 
                    value={imgUrl}
                    onChange={(e)=>setImgUrl(e.target.value)}
                    type="text" 
                    name="imgUrl" 
                    id="imgUrl" 
                    placeholder="Image subvention" 
                    />
        </FormGroup>
      
       
        <FormGroup>
                
                    <input 
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)}
                    type="text" 
                    name="desc" 
                    id="desc" 
                    placeholder="set your description" 
                    />
            </FormGroup>

         

            <FormGroup>
        <Input type="select" name="select" id="type" onChange={e=>setType(e.target.value)}>
          <option>Select type..</option>
          {types&&types.map(type=><option value={type._id}>{type.name}</option>)}
        </Input>
        </FormGroup>
      
        </Form>
        
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={add}>ADD</Button>{' '}
       
        </ModalFooter>
      </Modal>
      <br/> <br/> 
</div>

)}
     

export default AddSubvention
