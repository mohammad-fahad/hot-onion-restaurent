import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import logo2 from '../logo2.png';
import "firebase/auth";
import { createUserWithEmailAndPassword, initializeLogin, signInWithEmailAndPassword } from './LoginManager';
import { useHistory, useLocation } from 'react-router-dom';
import { MyContext } from '../App';



function LogIn() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
      isSignedIn: false,
      name: '',
      email: '',
      password: '',
      photo: ''
    });
  
    initializeLogin();
  
   const {loggedInUser, setLoggedInUser} = useContext(MyContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  
   
  
    
  
 const handleResponse = (res, redirect) =>{
      setUser(res);     
      setLoggedInUser(res);
      if(redirect){
          history.replace(from);
      }
    }
  
    const handleBlur = (e) => {
      let isFieldValid = true;
      if(e.target.name === 'email'){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      }
      if(e.target.name === 'password'){
        const isPasswordValid = e.target.value.length > 6;
        const passwordHasNumber =  /\d{1}/.test(e.target.value);
        isFieldValid = isPasswordValid && passwordHasNumber;
      }
      if(isFieldValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
      }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
      if(newUser && user.email && user.password){
        createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
      }
  
      if(!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
          
        })
      }
     
    }
  
  
  
    
    

    
    


    return (
        <div className="first">
            <div style={{ alignItems: 'center', margin: '4vw 30vw' }} >
            <img style={{ width: '20vw', marginLeft: '170px' }} src={logo2} alt="" />
            {newUser ?  <Form onSubmit={handleSubmit} className="m-5 ">
                <Form.Group controlId="formBasicEmail">
                   
                    <Form.Label>Name: </Form.Label>
                    <Form.Control onBlur={handleBlur} type="name" name="name" placeholder="Enter Name" />
                    <Form.Label>Email address: </Form.Label>
                    <Form.Control onBlur={handleBlur} type="email" name="email" placeholder="Enter Email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control onBlur={handleBlur} type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Label>Confirm Password: </Form.Label>
                <Form.Control onBlur={handleBlur} type="password" name="confirm" placeholder="Confirm Password" />
                <br /> <br />
                <Button onClick={handleSubmit} variant="danger" type="submit" className="p-2" style={{ width: '100%' }}>
                    Sign up
                </Button>
                <h6 onClick={() => setNewUser(!newUser)} className="mt-3" style={{textAlign: 'center', cursor: 'pointer', color: 'red'}}>Already have an account?</h6>
            </Form> : 
            <Form onClick={handleSubmit} className="m-5 ">
            <Form.Group controlId="formBasicEmail">
               
               
                <Form.Label>Email address: </Form.Label>
                <Form.Control onBlur={handleBlur} type="email" name="email" placeholder="Enter Email" />
                
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control onBlur={handleBlur} type="password" name="password"placeholder="Password" />
            </Form.Group>
           
            <br /> <br />
            <Button onClick={handleSubmit} variant="danger" type="submit" className="p-2" style={{ width: '100%' }}>
                Sign In
            </Button>
            <br/>
            <h6 onClick={() => setNewUser(!newUser)} className="mt-3" style={{textAlign: 'center', cursor: 'pointer', color: 'red'}}>Don't have an account?</h6>
        </Form>}
           
        </div>   
        </div>
         );
};

export default LogIn;