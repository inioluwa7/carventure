import React from 'react'
import '../styles/home.css'

import {Container, Row, Col } from 'reactstrap'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import joinDriverImg from '../assets/images/pana.jpg'

const Home = () => {
  return (
    <>
      <section className='hero__section text-center'>
        <div className="heroText text-light pt-5">
          <h1>Welcome to CarVenture</h1>

          <h4 className='pt-3'>Your Trusted Commuting Solution</h4>

          <p>Discover a convenient and sustainable way to travel. join our car pooling community
          and experience hassle-free rides, cost savings, and a greener commute.</p>

          <h3 className='pt-3'> Sign up today and start your journey with us</h3>
        </div>

        <Container>
        <Row>
          <Col className="d-flex justify-content-center">
          <div className="d-inline-flex pt-5">
              <SearchBar />
            </div>
          </Col>
        </Row>
      </Container>
      </section>

      <Container>
        <section>
            <Row>
              <ServiceList />
            </Row>
        </section>
          <div>
            <h2>
              Sign up today and start your <br /> journey with us
            </h2>
          </div>

        <section>
          <Row>
            <Col lg={5} className=''>
              <div className='joinDriver text-center'>
                <h3 className='p-3 text-light'>Join as a driver</h3>
              </div>
              <ul className='pt-4'>
                <li className='py-2'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, similique!</li>
                <li className='py-2'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quia!</li>
                <li className='py-2'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, error! </li>
              </ul>

            </Col>
            <Col lg={7} className='text-center'>
              <img src={joinDriverImg} alt="" className='img-fluid'/>
            </Col>
          </Row>
        </section>

        <section>
          <Row>
            <Col lg={7} className='text-center'>
              <img src={joinDriverImg} alt="" className='img-fluid'/>
            </Col>
            <Col lg={5} className=''>
              <div className='joinDriver text-center'>
                <h3 className='p-3 text-light'>Join as a passanger</h3>
              </div>
              <ul className='pt-4'>
                <li className='py-2'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, similique!</li>
                <li className='py-2'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quia!</li>
                <li className='py-2'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, error! </li>
              </ul>

            </Col>
          </Row>
        </section>
      </Container>

    </>
  )
}

export default Home
