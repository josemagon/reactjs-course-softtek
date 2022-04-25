import logo from './logo.svg';
import './App.css';
import ComponenteConH1YParrafo from './ComponenteConH1YParrafo';

function App() {
  // 1. Modificar app.js de tal forma que imprima “Hola mundo!” por consola

  console.log("Hola Mundo!");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ComponenteConH1YParrafo />
    </div>
  );
}

export default App;
