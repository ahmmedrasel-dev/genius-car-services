import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {

  const [
    signInWithEmailAndPassword,
    user,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate()
  const location = useLocation()

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password)
  }
  const navigateRegister = () => {
    navigate('/register')
  }

  return (
    <Container>
      <Row className='mt-5'>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onClick={handleSubmit} className='border p-5 rounded-3'>
            <div className='text-center'>
              <h3>Please Login</h3>
              <p>Login with Your Email & Password.</p>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit" className='w-100'>
              Submit
            </Button>

            <p className='text-center mt-3'>Don't have an account? <span style={{ 'cursor': 'pointer', 'color': 'red' }} onClick={navigateRegister}>Register</span></p>
          </Form>
        </Col>
      </Row>

    </Container>
  );
};

export default Login;