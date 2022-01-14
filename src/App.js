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
        <section className="right">
          <p className="message">Start guessing...</p>
          <p className="label-score">
            <span role="img" aria-label="top score emoji">
              {" "}
              💯{" "}
            </span>
            Score: <span className="score"></span>
          </p>
          <p className="label-highscore">
            <span role="img" aria-label="gold medal">
              {" "}
              🥇
            </span>{" "}
            Highscore: <span className="highscore"></span>
          </p>
        </section>
      <CheckGuess randomNumber={generateRandomNumber()} />
    </div>
  );
}

export default App;
