import React, { useState } from "react";
import "./App.css";

let num = Math.floor(
  Math.random() * (Math.floor(20) - Math.ceil(0)) + Math.ceil(1)
);

export default function App() {
  const [randomNumber, setRandomNumber] = useState(num);
  const [guess, setGuess] = useState("");
  const [currentScore, setCurrentScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState("Start guessing...");
  const [reveal, setReveal] = useState("?");

  function didUserWin(outcome) {
    setReveal(randomNumber);
    setMessage(outcome ? "🎉 Correct!" : "💥 You lost!");
    document.body.style.backgroundColor = outcome ? "#4ef037" : "#dc2f2f";
    if (outcome && currentScore > highScore) setHighScore(currentScore);
    if (!outcome) setCurrentScore(0);
  }

  function tooLowOrTooHigh() {
    setCurrentScore(currentScore - 1);
    setMessage(guess > randomNumber ? "📈 Too high!" : "📉 Too low!");
  }

  function compareNumbers() {
    if (reveal !== randomNumber) {
      if (guess < 1 || guess > 20) {
        setMessage("⛔️ Please guess a number between 1 and 20");
      } else if (currentScore > 1) {
        return guess === randomNumber ? didUserWin(true) : tooLowOrTooHigh();
      } else if (currentScore === 1) {
        return guess !== randomNumber ? didUserWin(false) : didUserWin(true);
      }
    } else {
      setMessage("Please play again!");
    }
  }

  function updateGuess(event) {
    setGuess(Number(event.target.value));
  }

  function handleClick(event) {
    event.preventDefault();
    if (event.target.className === "btn check") compareNumbers();
    if (event.target.className === "btn again") {
      setRandomNumber(
        Math.floor(
          Math.random() * (Math.floor(20) - Math.ceil(0)) + Math.ceil(1)
        )
      );
      setMessage("Start guessing...");
      setCurrentScore(20);
      setReveal("?");
      document.body.style.backgroundColor = "#222";
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={handleClick}>
          Again!
        </button>
        <div
          className={
            reveal === randomNumber ? "number big-box" : "number small-box"
          }
        >
          {reveal}
        </div>
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
              💯{" "}
            </span>
            Score: <span className="score">{currentScore}</span>
          </p>
          <p className="label-highscore">
            <span role="img" aria-label="gold medal">
              🥇{" "}
            </span>
            Highscore: <span className="highscore">{highScore}</span>
          </p>
        </section>
      </main>
      <footer>
        This game was coded by{" "}
        <a
          href="https://www.karenstewart.nl"
          className={currentScore === 0 ? "black-text" : "red-text"}
          target="_blank"
          rel="noreferrer"
        >
          Karen Stewart
        </a>
      </footer>
    </div>
  );
}
