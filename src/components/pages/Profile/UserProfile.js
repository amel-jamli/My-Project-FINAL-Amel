
import React,{useEffect} from 'react'
import {useSelector , useDispatch } from 'react-redux'
import Alert from 'react-bootstrap/Alert'
import { getType } from '../../../REDUX/actions/typeAction';
import { filterSubvention} from '../../../REDUX/actions/SubventionAction';
import AddSub from './subvention/AddSub'
import UserSendMsg from './UserSendMsg'
import SubList from './subvention/SubtList'
import UserUpdate from './UserUpdate'
import './user.css'





const UserProfile=()=>{
    
    const dispatch = useDispatch();
    useEffect(() => {
              dispatch(getType());
              dispatch(filterSubvention(user._id))
           }, [])


const user = useSelector((state) => state.userReducer.user);
const types = useSelector(state => state.typeReducer.types.type);
const subventions = useSelector(state => state.SubventionReducer.subventions.subvention);


    return (
        <div>



<div className="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                             <img src={user.imgUser} alt="this this photo"/> 
                          
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                  <h3> Welcome  <strong>{user.name}</strong>  </h3>  
                                    </h5>
                                  <br/> <br/> <br/> <br/> 
                                    <p class="proile-rating"> <span></span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                              
                                <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab"  role="tab" aria-controls="home" aria-selected="true">Profile Information</a>
                                <br/>
                             
                                <Alert  variant="success" style={{ width:530 }} >
        <Alert.Heading></Alert.Heading>
        <p>
        <strong>Email :</strong> {user.email}
                             <br/>
        <strong>Phone :</strong> {user.phone}
        </p>
        <hr />
     
      </Alert>
                             <br/>
                          



                                </li>

                               <hr/>
                                <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#pub" role="tab" aria-controls="home" aria-selected="true">Add your Subvention</a>
<br/>
                          
                              
                     <AddSub types={types} client={user}/>
                     <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab"  role="tab" aria-controls="home" aria-selected="true">Liste Subvention</a>
                                <br/>
                          

                                {subventions && subventions.map(subvention=> <SubList key={subvention._id} subvention={subvention}/>)}


                                </li>

                 
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
             <div style={{ display: "flex" , justifyContent:"space-between"  }}  >
                    <UserSendMsg email={user.email}/>
                 
                    <UserUpdate  user={user}/>
                    </div>                      
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                           
                           
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="pub" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                           
                                           
                                        </div>
                                       
                                       
                                      
                                       
                            </div>
                            <div class="tab-pane fade" id="msg" role="tabpanel" aria-labelledby="profile-tab">
                                       
                                 
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        </div>
    )
}

export default UserProfile
