import { Link } from 'react-router-dom';
import Nike from '../../images/Nike.jpg';
import React from 'react';

export const Header = () => {
return (
    <header>
        <Link to='/'>
            <div className="logo">
                <img src={Nike} alt='logo' width="150" />
                    <p className="logo-text">Zenin Shop</p>
            </div>
        </Link>
        <ul>
            <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item__total">0</span>
      </div>
    </header>
  );
}