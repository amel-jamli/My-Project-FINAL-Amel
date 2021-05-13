import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { deleteType } from '../../../REDUX/actions/typeAction';
import EditType from './EditType'
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { Button, Alert } from 'react-bootstrap';



const TypeList = ({type}) => {

  const dispatch = useDispatch()

  const delet=()=>{ 
    dispatch(deleteType(type._id))
    }

    const [show, setShow] = useState(false);


    return (
      <>


<Card style={{ width: '50rem' , textAlign:"center",  margin: "auto" }}>
  <Card.Header className="deux"> {type.name} {!show && <Button variant="warning" onClick={() => setShow(true)} style={{width:50}}>▼</Button>}</Card.Header>
  <ListGroup variant="flush">
  
  
 

<div style={{width:900 , display : "flex"}}>



</div  >
    <Alert show={show} variant="success" >
    <Alert.Heading></Alert.Heading>
    <strong> Description :</strong>
  
   <br/>
 <div className="puttext" >
   
   
   {type.description}
   
  
   </div>

   <br/>
   <hr/>
    <div style={{textAlign:"left"}}>
     <p><strong>ID type :</strong>   {type._id}</p>
   
    </div>
 



 
    <hr />
 
    <div className="d-flex justify-content-end">
      <Button onClick={() => setShow(false)} variant="info"  >
      ▲
     
      </Button>
      <div style={{marginLeft : 7 , marginRight : 7}} >
      <EditType type={type}/>
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

export default TypeList
