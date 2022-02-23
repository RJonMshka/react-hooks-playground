import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {

  const sound = useRef()
  const color = useRef()

  return (
    <form>
      <input 
        ref={sound}
        type="text"
        placeholder='Sound...' />
      <input 
        ref={color}
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
