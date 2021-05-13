import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { getSubventionType } from '../../../REDUX/actions/SubventionAction';
import Cardsubvention from '../PagesSubventions/CardSubvention';
import Alert from 'react-bootstrap/Alert'
import '../../NavBar/NavBar.css'
const Type = ({match}) => {

const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getSubventionType(match.params.id));
    }, [])

    const subventions = useSelector(state => state.SubventionReducer.subventions.subvention)
    const type = useSelector(state => state.typeReducer.types.type)


    const myType = type && type.find(el=>el._id === match.params.id)
  return (
      <>
<div >
   
    <Alert  variant="secondary" className="typeMe">
        <Alert.Heading className="typeMe"> {myType&& myType.name}</Alert.Heading >
     
        <hr />
     
     


<br/><br/><br/>
 <div className='container' style={{display:"flex",flexWrap:"wrap", flexDirection:"row" , justifyContent:"space-around"}}>
     {
         subventions && subventions.map(subvention=> <Cardsubvention subvention={subvention}/>)
     }
 </div>
 </Alert>
 </div>
 </>
  );
};

export default Type;

