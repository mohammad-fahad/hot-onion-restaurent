import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'react-bootstrap';
import logo2 from '../logo2.png';
import { Icon } from '@iconify/react';
import shoppingCart from '@iconify/icons-fa/shopping-cart';
import { Link } from 'react-router-dom';
import { MyContext } from '../App';




const Header = () => {
  const {cart} = useContext(MyContext) 

    return (
        <div style={{marginTop:"0px auto"}}>
            <Navbar className = "p-2  bg-light">
                <Navbar.Brand href="/home"><img style={{width: "160px"}} src={logo2} alt=""/></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">  
                <span className="style">{cart.length}</span> 
                <Icon className="mr-4" color="lightBlack" icon={shoppingCart} />   
                    <Navbar.Text className="mr-4">                       
                        <h5>Login</h5>
                    </Navbar.Text> <br/>
                    <Navbar.Text>
                        <Link to="/login">
                        <Button  variant="danger" style={{borderRadius: '20px'}}>Sign In</Button>    
                        </Link>                    
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <div className="background">
            <h1 style={{marginLeft: '28vw', paddingTop: '20vh', marginBottom: '5vh', fontSize: '350%'}}>Best Food for your hungry tummy!!</h1>
            <input type="search" className=" focus" style={{ borderRadius: '30px', width: '30vw', padding: '8px', marginLeft: '35vw', zIndex: '-1', border:'none', height: '6vh'}} placeholder="Search food items"/> 
            <Button variant="danger" style={{borderRadius: '30px', padding: '9px', width: '6vw', marginLeft: '-3vw', height: '6vh'}}>Search</Button>
            </div>
            
        </div>
    );
};

export default Header;