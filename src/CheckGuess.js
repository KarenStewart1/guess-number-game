import React, { useState } from "react";
import "./CheckGuess.css";

export default function CheckGuess(props) {
  return (
    <main className="CheckGuess">
      <section className="left">
          <input type="number" className="guess" onChange={updateGuess} />
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
