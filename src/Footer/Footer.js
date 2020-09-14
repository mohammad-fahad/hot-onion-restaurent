import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from "../logo.png";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 bg-dark">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <img style={{width: '10vw'}} src={logo} alt=""/> 
            <div className="footer-copyright text-left py-3 mt-5">
        <MDBContainer fluid className="text-light">
          &copy; {new Date().getFullYear()} Copyright: Mohammad Fahad
        </MDBContainer>
      </div>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    </MDBFooter>
  );
}


export default Footer;