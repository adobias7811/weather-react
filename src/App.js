import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchForm from "./SearchForm";
import CurrentWeather from "./CurrentWeather";

function App() {
  return (
    <div className="App">
      <SearchForm />
      <CurrentWeather />
    </div>
  );
}

export default App;
