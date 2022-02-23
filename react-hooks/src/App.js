import './App.css';
import { useTrees } from "./";

function App() {

  const { trees } = useTrees();

  return (
    <div>
      <h1>Trees</h1>
      { trees.map( tree => (
        <p key={tree.id}>
          {tree.type}
        </p>
      )) }
    </div>
  );
}

export default App;
