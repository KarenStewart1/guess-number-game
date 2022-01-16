import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [guess, setGuess] = useState(null);
  const [currentScore, setCurrentScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState("Start guessing...");
  const [reveal, setReveal] = useState("?");
  const [loaded, setLoaded] = useState(false);
  const [randomNumber, setRandomNumber] = useState();

  function load() {
    setRandomNumber(
      Math.floor(Math.random() * (Math.floor(20) - Math.ceil(0)) + Math.ceil(1))
    );
    setLoaded(true);
  }

  function compareNumbers() {
    if (guess < 1) {
      setMessage("Please guess a number between 1 and 20");
    } else if (!guess) {
      setMessage("⛔️ No number!");
    } else if (guess === randomNumber) {
      setMessage("🎉 Correct!");
      setReveal(randomNumber);
      document.body.style.backgroundColor = "#4ef037";
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
    } else if (guess > 20) {
      setMessage("Please guess a number between 1 and 20");
    } else if (guess < randomNumber) {
      setMessage("📉 Too low!");
      setCurrentScore(currentScore - 1);
    } else if (guess > randomNumber) {
      setMessage("📈 Too high!");
      setCurrentScore(currentScore - 1);
    }
  }

  function updateGuess(event) {
    setGuess(Number(event.target.value));
  }
  function handleClick(event) {
    event.preventDefault();
    compareNumbers();
  }
  function againButton(event) {
    event.preventDefault();
    setRandomNumber(
      Math.floor(Math.random() * (Math.floor(20) - Math.ceil(0)) + Math.ceil(1))
    );
    setMessage("Start guessing...");
    setCurrentScore(20);
    setReveal("?");
    document.body.style.backgroundColor = "#222";
  }
  if (loaded) {
    return (
      <div className="App">
        <header>
          <h1>Guess My Number!</h1>
          <p className="between">(Between 1 and 20)</p>
          <button className="btn again" onClick={againButton}>
            Again!
          </button>
          <div className="number">{reveal}</div>
        </header>
        <main>
          <section className="left">
            <input type="number" className="guess" onChange={updateGuess} />
            <button className="btn check" onClick={handleClick}>
              Guess!
            </button>
          </section>
          <section className="right">
            <p className="message">{message}</p>
            <p className="label-score">
              <span role="img" aria-label="top score emoji">
                {" "}
                💯{" "}
              </span>
              Score: <span className="score">{currentScore}</span>
            </p>
            <p className="label-highscore">
              <span role="img" aria-label="gold medal">
                {" "}
                🥇
              </span>{" "}
              Highscore: <span className="highscore">{highScore}</span>
            </p>
          </section>
        </main>
        <footer>
          This game was coded by{" "}
          <a href="https://www.karenstewart.nl" target="_blank">
          <a
            href="https://www.karenstewart.nl"
            target="_blank"
          >
            Karen Stewart
          </a>
        </footer>
      </div>
    );
  } else {
    load();
    return <div className="loading">Loading...</div>;
  }
}
