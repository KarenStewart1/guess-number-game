import React, { useState } from "react";
import "./CheckGuess.css";

export default function CheckGuess(props) {
  const [guess, setGuess] = useState(null);

  function updateGuess(event) {
    setGuess(Number(event.target.value));
  }

  function handleClick(event) {
    event.preventDefault();
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
  );
}
