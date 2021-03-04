import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from ReactJS</h1>
        <Weather city="Moralzarzal" />
      </header>
    </div>
  );
}

export default App;
