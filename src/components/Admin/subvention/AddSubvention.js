// import React,{useState} from 'react'
// import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// import {useDispatch,useSelector} from 'react-redux';
// import { addSubvention } from '../../../REDUX/actions/SubventionAction';

// function AddSubvention({types}) {
//     const [modal, setModal] = useState(false);

//     const toggle = () => setModal(!modal);
//     const [name, setName] = useState("");
//     const [imgUrl, setImgUrl] = useState("");
//     const [desc, setDesc] = useState("");
//     const [type, setType] = useState("");
  
//     const dispatch = useDispatch();
// const add=()=>{
//     dispatch(addSubvention({name,imgUrl,desc,type }))
//     toggle()
//     setName('');
//     setImgUrl('');
//     setDesc('')
//     setType('')

// };

//     return (
// <div>

// <Button color="info" onClick={toggle}>Add subvention</Button>
//       <Modal isOpen={modal} toggle={toggle} className="">
//         <ModalHeader toggle={toggle}>New Subvention</ModalHeader>
//         <ModalBody>
//         <Form 
//         >
//         <FormGroup >
                   
//                     <input 
//                     value={name}
//                     onChange={(e)=>setName(e.target.value)}
//                     type="text" 
//                     name="name" 
//                     id="name" 
//                     placeholder="Name subvention" 
//                     />
//         </FormGroup>
//         <FormGroup>
                  
//                     <input 
//                     value={imgUrl}
//                     onChange={(e)=>setImgUrl(e.target.value)}
//                     type="text" 
//                     name="imgUrl" 
//                     id="imgUrl" 
//                     placeholder="Image subvention" 
//                     />
//         </FormGroup>
      
       
//         <FormGroup>
                
//                     <input 
//                     value={desc}
//                     onChange={(e)=>setDesc(e.target.value)}
//                     type="text" 
//                     name="desc" 
//                     id="desc" 
//                     placeholder="set your description" 
//                     />
//             </FormGroup>

         

//             <FormGroup>
//         <Input type="select" name="select" id="type" onChange={e=>setType(e.target.value)}>
//           <option>Select type..</option>
//           {types&&types.map(type=><option value={type._id}>{type.name}</option>)}
//         </Input>
//         </FormGroup>
      
//         </Form>
        
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={add}>ADD</Button>{' '}
       
//         </ModalFooter>
//       </Modal>
// </div>

// )}
     

// export default AddSubvention
