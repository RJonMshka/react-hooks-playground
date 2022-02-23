import React, { useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';

const TreesContext = createContext();

export const useTrees = () => useContext(TreesContext);

const trees = [
  { id: "1", type: "Maple" },
  { id: "2", type: "Oak" },
  { id: "3", type: "Family" },
  { id: "4", type: "Component" },
];



ReactDOM.render(
  <TreesContext.Provider value={ {trees} }>
    <App />
  </TreesContext.Provider>,
  document.getElementById('root')
);
