import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  const navigate = useNavigate();
  const { name, img, description, price, id } = service;
  const handleNavigateServicesDetails = id => {
    navigate(`service/${id}`);
  }
  return (
    <div className='service'>
      <img className='w-100' src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p><small>{description}</small></p>
      <button className='btn btn-primary' onClick={() => handleNavigateServicesDetails(id)}>Book: {name}</button>
    </div>
  );
};

export default Service;