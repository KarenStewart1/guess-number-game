import "./App.css";
import CheckGuess from "./CheckGuess";

function App() {
  function generateRandomNumber() {
    return Math.floor(
      Math.random() * (Math.floor(20) - Math.ceil(0)) + Math.ceil(1)
    );
  }

  return (
    <div className="App">
      {" "}
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
        <div className="number">?</div>
      </header>
      <CheckGuess randomNumber={generateRandomNumber()} />
    </div>
  );
        <footer>
          This game was coded by{" "}
          <a href="https://www.karenstewart.nl" target="_blank">
            Karen Stewart
          </a>
        </footer>
}

export default App;
