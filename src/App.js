import React from 'react';
import logo from './logo.svg';
import  Card  from 'jr-card-tile/dist/Card'
import  Tile  from 'jr-card-tile/dist/Tile'
import './App.css';

function App() {
  return (
    <div className="App">
     <Tile>Product (Tile Component)</Tile>
     <Card children = "Product Description (Card Component)" />
    </div>
  );
}

export default App;
