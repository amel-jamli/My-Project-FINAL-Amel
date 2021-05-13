import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {getSubvention} from '../../../REDUX/actions/SubventionAction';
import CardSubvention from './CardSubvention';

const Subvention = ({}) => {
    const [NameFilter, setNameFilter] = useState('')
    const dispatch = useDispatch()


    useEffect(() => {;
    dispatch(getSubvention());
    
    }, []);
const mySubvention = useSelector((state) => state.SubventionReducer.subventions.subvention);




    return (

<div className='m-4 flex align-item-center ' >
<div className="d-flex align-items-end flex-column" style={{height:50}} >
    <input type="text" placeholder="Search for a subvention..." 
        onChange={(e) => setNameFilter(e.target.value)}/> 
</div>
<br/><br/><br/>
<div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:'space-around'}}>
{
mySubvention && mySubvention.filter((el)=>(el.name.toUpperCase().includes(NameFilter.toUpperCase().trim())))
.map((subvention,i)=><CardSubvention subvention={subvention} key={i}/>)
}
</div>
    
       
</div>
    )
}

export default Subvention
