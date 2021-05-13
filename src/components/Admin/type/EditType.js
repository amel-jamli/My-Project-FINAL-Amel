import React from 'react'
import  { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  Form, FormGroup, Label, Input } from 'reactstrap';
import {useDispatch,useSelector} from 'react-redux';
import { editType } from '../../../REDUX/actions/typeAction';


const EditType=({type}) =>{
const dispatch = useDispatch();
const [name, setName] = useState(type && type.name);

const [description, setDescription] = useState(type && type.description);
const [modal, setModal] = useState(false);

const toggle=()=>{
    setModal(!modal)
    setName(type.name)
    setDescription(type.description)

}

const edit=()=>{
    const editTy = {name,description}
    dispatch(editType(type._id,editTy));
    toggle();
}
// const user = useSelector((state) =>state.authReducer.user);
return (
    <div>

    <Button  color="secondary" onClick={toggle}>✎</Button>
    

    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Edit Type</ModalHeader>
        <ModalBody>
            <Form>
                <FormGroup>
              
                    <input   value={name}   onChange={(e)=>setName(e.target.value)} type="text"   name="name"   id="name" 
                    placeholder="Name a placeholder" 
                    />
                </FormGroup>
               
                <FormGroup>
                    
                    <input   value={description}  onChange={(e)=>setDescription(e.target.value)}  type="text"   name="Description"   id="Description" 
                    placeholder="Description" 
                    />
                </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
        <Button onClick={edit} color="primary" >Save</Button>
        
        </ModalFooter>
    </Modal>
    </div>
);

}

export default EditType
