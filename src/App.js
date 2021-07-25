import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import CurrentWeather from "./CurrentWeather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Key West" />
      <CurrentWeather />
    </div>
  );
}

export default App;
