import React from 'react';
import { ProductList } from './components/ProductList';
import { ShoppingCart } from './components/ShoppingCart';
import './App.css'; // For styling

function App() {
  return (
    <div className="app">
      <h1>Fullstack Integration - Redux Cart</h1>
      <ProductList />
      <hr />
      <ShoppingCart />
    </div>
  );
}

export default App;