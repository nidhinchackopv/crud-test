import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './admin/Navebar';
import Products from './admin/Products';
import ProductEdit from './admin/ProdutEdit';
import ProductCreate from './admin/ProductCreate';

function App() {

  
  return (
    <div data-testid ="app" className="App">
      
      <BrowserRouter>
      <Navbar />
          <Route exact path="/home" component={Products} data-testid="products"/>
          <Route exact path="/products/create" component={ProductCreate} data-testid="productcreate"/>
          <Route exact path="/products/:id/edit" component={ProductEdit} data-testid="productedit"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
