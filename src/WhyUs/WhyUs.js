import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import whyUs from '../fakeData/whyUs';
import arrow from '../ICON/ClipartKey_233262.png'


const WhyUs = () => {
    return (
        <div>
            <div className="col-md-4 m-5 text-left">
                <h1>Why you choose us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste a sapiente laboriosam, ullam quis sunt perspiciatis inventore exercitationem ad repellat numquam mollitia aut maiores non hic sequi cum aliquam tempora! Voluptatibus deserunt ipsum harum vel dolor aut, voluptatem obcaecati!</p>
            </div>
            <div className="d-flex text-left m-5" style={{align: "center"}}>
                {
                    whyUs.map((why) => <Card style={{ width: '28rem',borderRadius: '15px', border: 'none'}} key={why.id} className="m-5 effect " >
                        <Card.Img variant="top" src={why.image} />
                        <Card.Body className="d-flex align-self-start">
                            <Col xs={6} md={4} className="mr-2">
                                <Image src={why.icon} roundedCircle />
                            </Col>
                            <Card.Title>{why.title}</Card.Title>
                            </Card.Body>
                            <Card.Text className="p-5">
                                {why.description}  <br/> <br/>
                                <Link to="/" style={{textDecoration: 'none'}}>See more <img style={{width:"4%", marginLeft: "5px"}} src={arrow} alt=""/></Link>
                            </Card.Text>

                        
                    </Card>)
                }
            </div>
        </div>


    );
};

export default WhyUs;