import { useState, useEffect, useMemo } from "react";
import { Player, GameBoard, Log, GameOver } from "./components";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function App() {
  const initialGameBoard = useMemo(
    () => [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    []
  );

  const [gameTurn, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  useEffect(() => {
    for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol =
        gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol =
        gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol =
        gameBoard[combination[2].row][combination[2].column];

      if (
        firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        setWinner(firstSquareSymbol);
        break;
      }
    }
  }, [gameTurn]);

  let hasDraw = gameTurn.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    if (!winner) {
      setGameTurn((prevTurns) => [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ]);
      setActivePlayer((curActivePlayer) =>
        curActivePlayer === "X" ? "O" : "X"
      );
    }
  }

  function handleRematch() {
    setGameTurn([]);
    setWinner(null);
    hasDraw = false;
  }

  return (
    <main>
      <div id="game-container" className="highlight-player">
        <ol id="players">
          <Player
            initiaName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initiaName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleRematch={handleRematch} />
        )}
        <GameBoard handleSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
