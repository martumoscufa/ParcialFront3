import Historia from "./components/Historia";
import data from "../src/data.json"

function App() {
  return (
    <div className="App">
      <Historia data={data}/>
    </div>
  );
}

export default App;
