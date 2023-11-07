import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ListaClientes from './componentes/pages/listaClientes';
import ListaPets from './componentes/pages/listaPets';
import ListaProdutos from './componentes/pages/listaProdutos';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route element= { <App />}>
            <Route index element={ <ListaClientes /> } />
            <Route path='/produtos' element={ <ListaProdutos /> } />
            <Route path='/pets' element={ <ListaPets /> } />
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

