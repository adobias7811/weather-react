import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div>
        <Weather defaultCity="Key West" />
      </div>
      <footer>
        <h5>
          This React project is{" "}
          <a
            href="https://github.com/adobias7811"
            target="_blank"
            rel="noreferrer"
            title="link to Amanda's GitHub"
          >
            open source{" "}
          </a>{" "}
          and was coded by{" "}
          <a
            href="https://silly-kepler-6e4998.netlify.app"
            target="_blank"
            rel="noreferrer"
            title="Link to Amanda Dobias's portfolio"
          >
            Amanda Dobias 👩🏼‍💻{" "}
          </a>
        </h5>
      </footer>
    </div>
  );
}

export default App;
