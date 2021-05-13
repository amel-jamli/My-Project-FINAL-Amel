import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteSubvention } from '../../../REDUX/actions/SubventionAction'
import EditSubvention from './EditSubvention'

import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { Button, Alert } from 'react-bootstrap';

import '../Admin.css'

const SubventionList = ({subvention,types}) => {


const dispatch = useDispatch()

    const delet=()=>{
        dispatch(deleteSubvention(subvention._id))
        }


      

        const [show, setShow] = useState(false);


    return (
   <>

<Card style={{ width: '50rem' , textAlign:"center",  margin: "auto" }}>
  <Card.Header className="deux"> {subvention.name} {!show && <Button variant="warning" onClick={() => setShow(true)} style={{width:50}}>▼</Button>}</Card.Header>
  <ListGroup variant="flush">
 
  
 

<div style={{width:900 , display : "flex"}}>



</div  >
    <Alert show={show} variant="success" >
    <Alert.Heading></Alert.Heading>
    <strong> Description :</strong>

  
 <div className="puttext" >
   
   <img src= {subvention.imgUrl} style={{width:190}}/>
   

   {subvention.type&&subvention.type.name}
   
  

  <div style={{textAlign:"left"}}>
   {subvention.desc}
   </div>
   </div>
    
  
<hr/>
<div style={{textAlign:"left"}}>
<strong>ID subvention : </strong>{subvention._id}  
 </div>
    <hr />
    <div className="d-flex justify-content-end">
      <Button onClick={() => setShow(false)} variant="info"  >
      ▲
     
      </Button>
      <div style={{marginLeft : 7 , marginRight : 7}}>
      <EditSubvention types={types} subvention={subvention}/>
      </div>
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

export default SubventionList
