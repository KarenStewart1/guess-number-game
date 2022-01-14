import React, { useState } from "react";
import "./CheckGuess.css";

export default function CheckGuess(props) {
  // if computer number is the same = the computer number/my number is revealed in the box, the screen turns green,
  //  regenerate random number when again button presses
  // highscore is saved through multiple games
  const [guess, setGuess] = useState(null);
  const [currentScore, setCurrentScore] = useState(20);
  const [message, setMessage] = useState("Start guessing...");
  function compareNumbers() {
    if (guess === props.randomNumber) {
      setMessage("Correct!");
    } else if (guess < 1) {
      setMessage("Please guess a number between 1 and 20");
    } else if (guess > 20) {
      setMessage("Please guess a number between 1 and 20");
    } else if (guess < props.randomNumber) {
      setMessage("Too low!");
    } else if (guess > props.randomNumber) {
      setMessage("Too high!");
    }
  }

  function updateGuess(event) {
    setGuess(Number(event.target.value));
  }

  function handleClick(event) {
    event.preventDefault();
    compareNumbers();
  }
  return (
    <main className="CheckGuess">
      <section className="left">
        <form onSubmit={handleClick}>
          <input type="number" className="guess" onChange={updateGuess} />
          <button className="btn check">Guess!</button>
        </form>
      </section>
      <section className="right">
        <p className="label-score">
          <span role="img" aria-label="top score emoji">
            {" "}
            💯{" "}
          </span>
        </p>
        <p className="label-highscore">
          <span role="img" aria-label="gold medal">
            {" "}
            🥇
          </span>{" "}
        </p>
      </section>
    </main>
          <p className="message">{message}</p>
  );
}
