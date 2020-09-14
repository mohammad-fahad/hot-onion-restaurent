import React from 'react';
import { Card } from 'react-bootstrap';
import breakfast1 from '../Breakfast/breakfast1.png';
import breakfast2 from '../Breakfast/breakfast2.png';
import breakfast3 from '../Breakfast/breakfast3.png';
import breakfast4 from '../Breakfast/breakfast4.png';
import breakfast5 from '../Breakfast/breakfast5.png';
import breakfast6 from '../Breakfast/breakfast6.png';

const FoodItems = () => {
    const breakfast = [
        { photo: breakfast1, name: 'Eggs Benedict', details: 'Too good to be missed', price: 8.99 },
        { photo: breakfast2, name: 'Breakfast sandwich', details: 'Too good to be missed', price: 9.99 },
        { photo: breakfast3, name: 'Baked Chicken', details: 'Too good to be missed', price: 10.99 },
        { photo: breakfast4, name: 'Bagel and cream cheese', details: 'Too good to be missed', price: 6.99 },
        { photo: breakfast5, name: 'Full Breakfast Fried Egg Toast Brunch', details: 'Too good to be missed', price: 3.99 },
        { photo: breakfast6, name: 'Toast Croissant Fried egg', details: 'Too good to be missed', price: 19.99 }
    ];


    return (
        <div className="justify-content-spacing d-inline-flex">
            <div className="d-inline-block flex flex-wrap text-center">
                <p >Breakfast</p> <br />
                <p >Lunch</p> <br />
                <p >Dinner</p> <br />
            </div>
            <div className=" p-5 main ">

                {
                    breakfast.map(br =>

                        <Card className="d-inline-flex m-5 p-5 flex-wrap justify-content-center effect " style={{ width: '20vw', border: 'none' }}>
                            <div>
                                <Card.Img variant="top" src={br.photo} />
                                <Card.Body className="text-center">
                                    <Card.Title>{br.name}</Card.Title>
                                    <Card.Text>
                                        <p>{br.details}</p>
                                        <h4>${br.price}</h4>
                                    </Card.Text>
                                </Card.Body>
                            </div>


                        </Card>)

                }

            </div>
        </div>
    );

};


export default FoodItems;