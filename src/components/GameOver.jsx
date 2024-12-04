import React from "react";

const GameOver = ({ winner, handleRematch }) => {
  return (
    <div id="game-over">
      <h2>GameOver</h2>
      {winner !== null ? <p>You Won, {winner}!</p> : <p>Draw!</p>}
      <p>
        <button onClick={handleRematch}>Rematch</button>
      </p>
    </div>
  );
};

export default GameOver;
