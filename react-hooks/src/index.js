import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function App() {

  return (
    <form>
      <input 
        type="text"
        placeholder='Sound...' />
      <input 
        type="color" />
      <button>ADD</button>
    </form>
  );
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
