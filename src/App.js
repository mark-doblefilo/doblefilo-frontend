import './App.css';
import React from 'react';
import {data} from './services/info';

function App() {
  const name = data.name;


  return (
      <div>
          <h1>{name}</h1> 
      </div>
  ); 
}
export default App;