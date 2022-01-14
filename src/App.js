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
