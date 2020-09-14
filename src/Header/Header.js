import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'react-bootstrap';
import logo2 from '../logo2.png';
import background from '../bannerbackground.png';
import { Icon } from '@iconify/react';
import shoppingCart from '@iconify/icons-fa/shopping-cart';


const Header = () => {
    return (
        <div>
            <Navbar className = "p-2 ml-4 mr-4">
                <Navbar.Brand href="#home"><img style={{width: "160px"}} src={logo2} alt=""/></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">  
                <Icon className="mr-4" icon={shoppingCart} />      
                    <Navbar.Text className="mr-4">                       
                        <h5>Login</h5>
                    </Navbar.Text> <br/>
                    <Navbar.Text>
                        <Button variant="danger" style={{borderRadius: '20px'}}>Sign Up</Button>                        
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <img style={{backgroundSize: 'cover', width: '100%'}} className="justify-content-end" src={background} alt=""/> 
        </div>
    );
};

export default Header;