import { Link } from 'react-router-dom';
import Portada from '../../images/inicio.jpg';
import React from 'react';

export const Inicio = () => {
  return (
    <div className='inicio'>
      <Link to='/'>
        <h1>Inicio</h1>
      </Link>
      <Link to='/productos'>
        <h1>PRODUCTOS</h1>
      </Link>
      <img src={Portada} alt="inicio" />
    </div>
  );
}