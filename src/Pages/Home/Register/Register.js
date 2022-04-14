import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, error] = useCreateUserWithEmailAndPassword(auth);

  if (error) {
    console.log(error.message)
  }
  if (user) {
    navigate('/home')
  }
  const handleSubmitForm = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value
    createUserWithEmailAndPassword(email, password)
  }
  return (
    <Container>
      <Row className='mt-5'>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmitForm} className='border p-5 rounded-3'>
            <div className='text-center'>
              <h3>Register</h3>
              <p>Create Account with Your Email & Password.</p>
            </div>

            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Full Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>

            <p className='text-center mt-3'>Already have an account? <Link style={{ 'cursor': 'pointer', 'color': 'red' }} to='/login'>Login</Link></p>
          </Form>
        </Col>
      </Row>

    </Container>
  );
};

export default Register;