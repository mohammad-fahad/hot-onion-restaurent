import React from 'react';
import { Card } from 'react-bootstrap';
import icon from '../ICON/Group 287.png';

const PlaceOrder = () => {
    return (
        <div className="d-flex" style={{display: "block", margin: "20vh 5vw"}}>
            <div className='col-md-6'>
            <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.0097778199!2d90.34928576871454!3d23.780777744581084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1601043945727!5m2!1sen!2sbd"} width="600" height="450" frameborder="0" style={{border:'0'}} allowFullScreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div className="col-md-6 container" >
                <Card style={{backgroundColor:'lightGrey', display: 'block', margin:'auto'}}>
                    <img style={{width:"30%"}} src={icon} alt=""/>
                    <h1 className="text-danger">This Part is Still Under Construction</h1>
                </Card>
            </div>
        </div>
    );
};

export default PlaceOrder;