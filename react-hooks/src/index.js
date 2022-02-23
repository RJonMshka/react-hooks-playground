import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const initialState = {
  message: "hi"
};

function reducer(state, action) {
  switch(action.type) {
    case "yell":
      return {
        message: "HEY!"
      };
    case "whisper":
      return {
        message: "excuse me"
      };
    default: {
      return {
        message: "nothing"
      }
    }
  }
}

function App() {

  const [state, dispatch ] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={ () => dispatch({type: "yell"}) }>YELL</button>
      <button onClick={ () => dispatch({type: "whisper"}) }>Whisper</button>
    </>
  );
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
