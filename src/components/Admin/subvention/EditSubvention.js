import React from 'react'
import  { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  Form, FormGroup,Input } from 'reactstrap';
import {useDispatch,useSelector} from 'react-redux';
import { editSubvention } from '../../../REDUX/actions/SubventionAction';



const EditSubvention=({subvention,types}) =>{

const dispatch = useDispatch();
const [name, setName] = useState(subvention.name);
const [imgUrl, setImgUrl] = useState(subvention.imgUrl);
const [desc, setDesc] = useState(subvention.desc);
const [type, setType] = useState(subvention.type);

const [modal, setModal] = useState(false);

console.log(desc)

const toggle=()=>{
    setModal(!modal)
    setName(subvention.name)
    setImgUrl(subvention.imgUrl)
    setDesc(subvention.desc)
    setType(subvention.type)
   

}

const edit=()=>{
    const editedSub = {name,imgUrl,desc,type}
    dispatch(editSubvention(subvention._id,editedSub));
    toggle();
}
// const user = useSelector((state) =>state.authReducer.user);
return (
    <div>
      
    <Button  color="secondary" onClick={toggle}>✎</Button>
   

    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}> Edit subvention </ModalHeader>
        <ModalBody>
            <Form>
                <FormGroup>
                   
                    <input   value={name} onChange={(e)=>setName(e.target.value)} type="text"   name="name"  id="name" 
                    placeholder="Name subvention" 
                    />
                </FormGroup>
                <FormGroup>
                 
                    <input   value={imgUrl}  onChange={(e)=>setImgUrl(e.target.value)} type="text"   name="imgUrl"  id="imgUrl" 
                    placeholder="imgUrl subvention" 
                    />
                </FormGroup>
             
                <FormGroup>
                 
                    <input  value={desc}  onChange={(e)=>setDesc(e.target.value)} type="text"  name="desc"  id="desc" 
                    placeholder="description subvention" 
                    />
                </FormGroup>

              

                <FormGroup>
       
       <Input type="select" name="select" id="type" onChange={e=>setType(e.target.value)}>
         {types&&types.map(type=><option value={type._id}>{type.name}</option>)}
       </Input>
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

export default EditSubvention
