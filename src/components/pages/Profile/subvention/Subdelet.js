import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { deleteSubvention } from '../../../../REDUX/actions/SubventionAction'

 import './Subdelet.css'

function Subdelet({match}) {
    const [show, setShow] = useState(true);

const history = useHistory();


const dispatch = useDispatch()
    const delet=()=>{
        dispatch(deleteSubvention(match.params.id))
        history.push('/');
        }



const cancel =()=>{
    history.push('/userprofile');
}

    return (
<div className="boody">
<br/><br/>
<hr/>
<h3>Are you sure you want delete this subvention !!</h3>
<hr/>
<br/><br/><br/>
<div>
  <div id="container">
    <div id="success-box">
      <div className="dot" />
      <div className="dot two" />
      <div className="face">
        <div className="eye" />
        <div className="eye right" />
        <div className="mouth happy" />
      </div>
      <div className="shadow scale" />
      <div className="message"><h1 className="alert"></h1></div>
      <button className="button-box" onClick={delet}><h1 className="green">Delete</h1></button>
    </div>
    <div id="error-box">
      <div className="dot" />
      <div className="dot two" />
      <div className="face2">
        <div className="eye" />
        <div className="eye right" />
        <div className="mouth sad" />
      </div>
      <div className="shadow move" />
      <div className="message"><h1 className="alert"></h1></div>
      <button className="button-box" onClick={cancel}><h1 className="red">Cancel</h1></button>
    </div>
  </div>
</div>




</div>

)}
     

export default Subdelet
