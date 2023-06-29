import React from 'react'
import { Container, Row, Button, Col} from 'reactstrap'
import { FaMailBulk } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg='3'>
            <h4>PASSANGERS</h4>
              <a href="#"><p>Find a ride</p></a>
              <a href="#"><p>How does it work</p></a>
              <a href="#"><p>Help/ FAQ's</p></a>
              <a href="#"><p>My seat bookings</p></a>
              <a href="#"><p>Cancellation policy</p></a>
          </Col>
          <Col lg='3'>
            <h4>DRIVERS</h4>
              <a href="#"><p>Post a ride</p></a>
              <a href="#"><p>How does it work</p></a>
              <a href="#"><p>Help/ FAQ's</p></a>
              <a href="#"><p>My passenger list</p></a>
              <a href="#"><p>Cancellation policy</p></a>
          </Col>
          <Col lg='3'>
            <h4>CARVENTURE.COM</h4>
              <a href="#"><p>About us</p></a>
              <a href="#"><p>Contact us</p></a>
              <a href="#"><p>Terms of use and privacy policy</p></a>
              <a href="#"><p>News</p></a>
              <a href="#"><p>Cancellation policy</p></a>
          </Col>
          <Col lg='3'>
            <h4>SUPPORT</h4>
            <a href="#">
              <p>< FaMailBulk className="mail_logo"/> Email</p>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
