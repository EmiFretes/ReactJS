import 'boxicons';

import { DataProvider } from "./context/Dataprovider"
import { Header } from "./components/Header";
import { Paginas } from './components/Paginas';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App()  {
  return(
    <DataProvider> 
    <div className="App">
      <Router> 
      <Header/>

      <Paginas/>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;