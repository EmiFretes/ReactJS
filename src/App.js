import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0)

  function sumar ()  {
    setContador ( contador +1 )

  }


  return (
    
    <div className="container">
      <NavBar  >
        <CartWidget />
      </NavBar>
      <div>
      <h1>Aqui iran los modelos de zapatillas</h1>
      <h2>Cantidad de pedidos</h2>
      <button onClick={sumar}>{contador} </button>
      <ItemListContainer greeting= 'Zapatillas Nike'/>
    </div>
    </div>
  );
}

export default App;