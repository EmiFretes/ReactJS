import { Link } from 'react-router-dom';
import Portada from '../../images/inicio.jpg';
import React from 'react';

export const Inicio = () => {
  return (
    <div className='inicio'>
      <Link to='/'>
        <h1>Bienvenido a Zenin la mejor tienda de zapatillas</h1>
      </Link>
      <Link to='/productos'>
        <h2 className='iniColeccion'>Explora nuestra colección</h2>
      </Link>
      <img src={Portada} alt="Inicio" />
    </div>
  );
}