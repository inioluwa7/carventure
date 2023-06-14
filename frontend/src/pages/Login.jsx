import React from 'react';
import '../styles/login.css'
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import googleIcon from '../assets/svg/devicon_google.svg'
import facebookIcon from '../assets/svg/logos_facebook.svg'

const Login = () => {
  return (
    <Container className='mt-3'>
      <Form className='pb-2 text-center login_form'>
        <div className="mb-5" style={{background: '#31B6C1', borderRadius: '24px 24px 0px 0px'}}>
          <h5 className='py-3 px-2'>Sign in to your profile</h5>
        </div>
        <FormGroup className='px-2 '>
          <Input
            id="fname"
            name="first name"
            placeholder="Google"
            type="text"
          />
        </FormGroup>
        <FormGroup className='px-2'>
          <Input
            id="fname"
            name="last name"
            placeholder="Facebook"
            type="text"
          />
          <span><img src={googleIcon} alt="" /></span>
          <span><img src={facebookIcon} alt="" /></span>
        </FormGroup>
        <div>
          <h4>OR</h4>
        </div>
        <FormGroup className='px-2'>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email Address"
            type="email"
          />
        </FormGroup>
        <FormGroup className='px-2'>
          <Input
              id="exampleEmail"
              name="password"
              placeholder="Password"
              type="password"
            />
        </FormGroup>
        <div className="text-center py-2 submit__btn">
          <Button className=''>
            Sign In
          </Button>
        </div>
        <div>
          <span><a href="#">Forgot Your Password?</a></span>
        </div>
        <FormGroup check  className='ms-2'>
          <Input type="checkbox" />
          {' '}
          <Label check>Remember me on this device</Label>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default Login;
