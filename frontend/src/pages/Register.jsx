import React from 'react'
import '../styles/register.css'
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';

const Register = () => {
  return (
    <Container className='mt-3'>
      <Form className='pb-2 register_form'>
        <div className="" style={{background: '#31B6C1', borderRadius: '24px 24px 0px 0px'}}>
          <h5 className='py-3 px-2'>Sign Up for Free</h5>
        </div>
        <FormGroup className='px-2'>
          <Label for="exampleSelect">Gender</Label>
          <Input id="exampleSelect" name="select" type="select">
            <option disabled selected >--Select--</option>
            <option>Male</option>
            <option>Female</option>
          </Input>
        </FormGroup>
        <FormGroup className='px-2'>
          <Label for="fname">First Name</Label>
          <Input
            id="fname"
            name="first name"
            placeholder="First Name"
            type="text"
          />
        </FormGroup>
        <FormGroup className='px-2'>
          <Label for="lname">Last Name</Label>
          <Input
            id="fname"
            name="last name"
            placeholder="Last Name"
            type="text"
          />
        </FormGroup>
        <FormGroup className='px-2'>
          <Label for="exampleEmail">Email Address</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email Address"
            type="email"
          />
        </FormGroup>
        <FormGroup check  className='ms-2'>
          <Input type="checkbox" />
          {' '}
          <Label check>I accept the <a href="#">terms of use of this service</a> and confirm that I am at least 16 years old</Label>
        </FormGroup>
        <div className="text-center py-2 submit__btn">
          <Button className=''>
            Sign Up
          </Button>
        </div>

      </Form>
    </Container>
  )
}

export default Register
