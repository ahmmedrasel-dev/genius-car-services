import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServicesDetails = () => {
  const { servicesId } = useParams()
  return (
    <div className='text-center mt-5'>
      <h1>This is Services Details Page: {servicesId}</h1>
      <div className='mt-5'>
        <Link to='/checkout'>
          <Button className='btn btn-success'>Proceed to Checkout</Button>
        </Link>
      </div>

    </div>
  );
};

export default ServicesDetails;