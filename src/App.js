import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Key West" />
    </div>
  );
}

export default App;
