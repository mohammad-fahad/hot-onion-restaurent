import Icon from '@iconify/react';
import shoppingCart from '@iconify/icons-fa/shopping-cart';
import React, { useContext, useState } from 'react';
import { Button, Card, Col, Form, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MyContext } from '../App';
import Header from '../Header/Header';
import logo2 from '../logo2.png';



const Cart = () => {
    const { cart, setCart, newCart, setNewCart, loggedInUser, setLoggedInUser} = useContext(MyContext);

    
    // const crt = props.cart;
    // const course = props.course;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const food = cart[i];
        total += food.price;
        console.log(total);
    }

    return (
        <div>
           <Navbar className = "p-2  bg-light">
                <Navbar.Brand href="/home"><img style={{width: "160px"}} src={logo2} alt=""/></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">  
                <Icon className="mr-4" color="lightBlack" icon={shoppingCart} /><span className="style">{cart.length}</span>     
                    <Navbar.Text className="mr-4">                       
                        
                    </Navbar.Text> <br/>
                    <Navbar.Text>
                        <Link to="/login">
                        <Button  variant="danger" onClick={() => setLoggedInUser('')} style={{borderRadius: '20px'}}>Sign Out</Button>    
                        </Link>                    
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <div className="d-flex">
            <div className="col-md-6 m-5 p-5 container">
                <Form>
                    <h3>Edit Delivery Details</h3> <hr /> <br />
                    <Form.Row>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Additional Information</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            {/* <Form.Label>State</Form.Label> */}
                            {/* <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control> */}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Link to='/checkout'>
                    <Button className="form-control" variant="danger">
                        Save & continue
                   </Button>
                    </Link>
                    
                </Form>
            </div>
            <div className="col-md-6">
            
                {
                    
                    cart.map(crt =>
                        
                            <div className="card mb-3 m-5 p-2" style={{maxWidth: '540px', borderRadius: '10px', backgroundColor: 'lightGrey'}}>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={crt.images[1]} class="card-img" alt="..." />
                                    </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{crt.name}</h5>
                                                <p className="card-text">{crt.shortDescription}</p>
                                                <p className="card-text">${crt.price}</p>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                )
                
            }
            <h4>Total: ${total}</h4>
            <div className="container">
                <Link to="/placeorder">
                <Button variant="danger">Place Order</Button>
                </Link>
            </div>
           
            </div>
        </div>
        </div>
        
    );
};

export default Cart;