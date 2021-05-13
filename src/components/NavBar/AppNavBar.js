import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, NavItem,Button} from 'reactstrap';
import ListTypes from './ListType/ListType'
import { logout } from '../../REDUX/actions/userAction';
import './NavBar.css'



const AppNavBar = () => {



  const dispatch = useDispatch();


  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);



  const logoutUser = () => {
    dispatch(logout());
  };

  const authLinks = (
    <Fragment>
      <div>
      <NavItem style={{display:'flex', flexDirection:'row'}}>
        
          <div >
           {(user && user.role==="user") ? 
            <div style={{display:'flex', flexDirection:'row'}}>
        
    
          
              <Link  to="/userprofile"><Button style={{marginLeft:10 , marginRight:10}} >Profil</Button>
                </Link></div>

                
            :<Link to="/Panel"><Button style={{marginLeft:10 , marginRight:10}}>∝ Panel</Button></Link>}  
          </div>

          <Link to ='/login'>
        <Button  onClick={logoutUser}>◉ logout</Button>
        </Link>


      </NavItem>
    


      </div>
      
    </Fragment>
  );

  const guestLinks = (
    <Fragment >
      <NavItem className='pr-2'>
     
<Link to="Register">
        <Button> Register</Button>
        </Link>
      </NavItem>
      <NavItem>
<Link to="login">
      <Button>Login</Button>
      </Link>
      </NavItem>
    </Fragment>
  );

  return (
    <div>
<div className="navme">
<nav className="navbar navbar-expand-lg navbar-light bg-light nav">
  <a className="navbar-brand" href="/"> HELP </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <ListTypes/>
      

           
    </ul>
    <div className="form-inline my-2 my-lg-0">

    <Nav className="ml-auto" navbar>
              {isAuth ? authLinks : guestLinks}
            </Nav>
         
          

    
    </div>
  </div>
</nav>

        </div>

     
         
       
      
     
    </div>
  );
};

export default AppNavBar;
