import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { registerUser } from '../../REDUX/actions/userAction';
import './SignUp.css'

const RegisterModal = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imgUser, setImgUser] = useState('');


  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = () => {
    const newUser = { name, phone, email, password,imgUser };
    dispatch(registerUser(newUser));
    history.push("/")
    setEmail('');
    setName('');
    setPhone('');
    setPassword('');
    setImgUser('');
  };

  return (
    <div>
  
  <br/> <br/> <br/> 

      <div class="containerS">

<div id="signup">

    <div class="header">
    <br/>
        <h3>Sign Up</h3>
        
        
        
    </div>
    
    <div class="sep"></div>

    <div class="inputs">
    

    <input
                type="text"
                value={name}
                name="name"
                id="name"
                placeholder="Name"
                
                onChange={(e) => setName(e.target.value)}
              />
           
              <input
                type="text"
                value={phone}
                name="phone"
                id="phone"
                placeholder="Phone"
              
                onChange={(e) => setPhone(e.target.value)}
              />
              
              <input
                type="email"
                value={email}
                name="email"
                id="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
           
              <input
                type="password"
                value={password}
                name="password"
                id="password"
                placeholder="Password"
               
                onChange={(e) => setPassword(e.target.value)}
              />
         
              <input
                type="text"
                value={imgUser}
                name="imgUser"
                id="imgUser"
                placeholder="Picture"
              
                onChange={(e) => setImgUser(e.target.value)}
              />
        
        
        
       
        <button
                color='info'
                id="submit"
                onClick={handleRegister}
              >
                Register
              </button>
         <div class="checkboxy">
            <label>I have account <Link to="/login">Sign in</Link></label>
        </div>
    
  
        </div>

</div>

</div>


     
    </div> 
  );
};

export default RegisterModal;
