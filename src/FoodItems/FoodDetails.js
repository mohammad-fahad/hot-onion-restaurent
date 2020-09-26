import { Icon } from '@iconify/react';
import shoppingCart from '@iconify/icons-fa/shopping-cart';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { MyContext } from '../App';
import meals from '../fakeData/fakeData';

const FoodDetails = () => {
    const { fId } = useParams();
    const [foods] = useState(meals);
    const [selectedFood, setSelectedFood] = useState({});
    const {cart, setCart, newCart, setNewCart} = useContext(MyContext);

    useEffect(() => {

        const selectedItem = foods.find(fd => fd.id === parseInt(fId));

        setSelectedFood(selectedItem);

    }, [selectedFood])




    return (
        <div className="d-flex">
            <Link to ="/cart" className="m-5">
            <span className="style">{cart.length}</span>  
            <Icon className=" justify-content-end" color="black" icon={shoppingCart} /> 
            </Link>
            
            <div className="m-5">
           
                <Card style={{ width: '30vw', border: 'none' }} className="justify-content m-5" key={selectedFood.id}>

                    <Card.Body >
                        <Card.Title style={{ fontSize: '60px' }}>{selectedFood.name}</Card.Title>
                        <Card.Text >
                            {selectedFood.fullDescription} <br />
                            <strong style={{ fontSize: '30px' }}> ${selectedFood.price} </strong>
                        </Card.Text>
                        <Button onClick={() => setCart([...cart, selectedFood])} variant="danger" style={{ borderRadius: '30px', padding: '10px' }}>Add to cart</Button>
                        <Link to="/home">
                        <Button variant="success" style={{ borderRadius: '30px', marginLeft: '7%', padding: '10px' }}>Back To Home</Button>
                        </Link>
                        
                    </Card.Body>
                </Card>
            </div>
            <div className="m-5">

                <Card.Img style={{ marginLeft:'100px', zIndex: '-1', width: '30vw' }} src={selectedFood.images && selectedFood.images[0]} />
            </div>

        </div>
    );
};

export default FoodDetails;