import './App.css';
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <label for="checkbox1">{ checked ? "Checked" :  "Not Checked" }</label>
      <input 
        id="checkbox1"
        type="checkbox" 
        value={checked}
        onChange={ () => setChecked( checked => !checked ) }
        />
    </div>
  );
}

export default App;
