import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import './ListType.css'

function NavBar() {
 

    const types = useSelector(state => state.typeReducer.types.type)
  
    return (
        <>

        <div class="dropdown">
       Type
        <div class="dropdown-content">
     

<div className='container mt-2'>
    <ul style={{listStyle:'none',display:'flex',flexDirection:"column", justifyContent:'space-around' , margin : 10}}>
        {types && types.map(type => <Link to={`/type/${type._id}`} className="btn btn-outline-primary border-0"><li key={type._id}>{type.name}</li></Link>)}
       
    </ul>
</div>



        </div>
      </div>
</>
    )
}

export default NavBar
