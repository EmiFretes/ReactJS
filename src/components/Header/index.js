import React, {useContext} from 'react';

import {DataContext} from "../../context/Dataprovider"
import { Link } from 'react-router-dom';
import Nike from '../../images/Nike.jpg';

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito

  const toogleMenu = () => {
    setMenu(!menu)

  }



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
      <div className="cart" onClick={toogleMenu} >
        <box-icon name="cart"></box-icon>
        <span className="item__total">{carrito.length} </span>
      </div>
    </header>
  );
}