import React from 'react'
import { Container, Row, Button, Col} from 'reactstrap'

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg='3'>
            <h3>PASSANGERS</h3>
          </Col>
          <Col lg='3'>
            Second
          </Col>
          <Col lg='3'>
            Third
          </Col>
          <Col lg='3'>
            Fourth
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
