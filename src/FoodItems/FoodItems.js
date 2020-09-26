import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import meals from '../fakeData/fakeData';
import WhyUs from '../WhyUs/WhyUs';

console.log();
const FoodItems = () => {   
const [food, setFoods] = useState([]);
const [type, setType] = useState("Breakfast");




useEffect (() => { 
    const item = meals.filter(fd => fd.type.toLowerCase() === type.toLowerCase());
    setFoods(item);
    },[type])


    return (
        <div className="p-5">
            <div className="d-flex justify-content-around container mb-5">
                <h5 className={type === 'Breakfast' ? 'active m-5' : 'm-5'} style={{cursor: 'pointer'}} onClick={() => setType("Breakfast")}>Breakfast</h5> <br /> <br/>
                <h5 className={type  === 'lunch' ? 'active m-5' : 'm-5'} style={{cursor: 'pointer'}} onClick={() => setType("lunch")}>Lunch</h5> <br /> <br/>
                <h5 className={type  === 'Dinner' ? 'active m-5' : 'm-5'} style={{cursor: 'pointer'}} onClick={() => setType("Dinner")}>Dinner</h5> <br />              

            </div>
            <div className="row justify-content-center" style={{marginLeft:'8%'}}>
         
                {
                    food.map(br =>
                   
                        <div className="col-md-4 justify-content-center" key={br.id}>
                             <div>
                        <Card className=" effect "  style={{ width: '20vw', border: 'none'}}>
                            <Link to ={`/foodDetails/${br.id}`} style={{textDecoration: 'none'}}>
                            <div>
                                <Card.Img variant="top" src={br.images} />
                                <Card.Body className="text-center text-dark">
                                    <Card.Title>{br.name}</Card.Title>
                                    <Card.Text>                                        
                                        {br.shortDescription}
                                        <br/>
                                        <strong>${br.price}</strong>                                       
                                        
                                    </Card.Text>
                                </Card.Body>
                            </div>
                            </Link>

                            
                        </Card> <br/>
                        </div>
                    </div>
                         )

                }
                <br/>
                <Button variant="secondary" className="disabled mt-5">Check Out Your Food</Button>
            </div>
            
            <WhyUs />
        </div>
    );

};


export default FoodItems;