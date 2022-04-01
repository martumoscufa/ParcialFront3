import Historia from "./components/Historia";
import data from "../src/data.json"

function App() {
  return (
    <div className="App">
      <h1>Elige tu aventura</h1>
      <Historia data={data}/>
    </div>
  );
}

export default App;
