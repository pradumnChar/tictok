import React from "react";
import Square from "./Square";
import "../index.css";
import { useState } from "react";
const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setX] = useState(true);

  const ok = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 5, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 4, 6],
    ];
    for (let i of winner) {
      const [x, y, z] = i;
      if (state[x] != null && state[x] === state[y] && state[x] === state[z]) {
        return state[x];
      }
    }
    return false;
  };
  const winner = ok();

  const handleClick = (index) => {
    const copy = [...state];
    copy[index] = isXturn ? "X" : "0";
    setState(copy);
    setX(!isXturn);
  };

  return (
    <div className="c">
      <div className="container">
        {winner ? (
          <>{winner} won</>
        ) : (
          <>
            <div className="boardrow">
              <Square onClick={() => handleClick(0)} value={state[0]} />
              <Square onClick={() => handleClick(1)} value={state[1]} />
              <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="boardrow">
              <Square onClick={() => handleClick(3)} value={state[3]} />
              <Square onClick={() => handleClick(4)} value={state[4]} />
              <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="boardrow">
              <Square onClick={() => handleClick(6)} value={state[6]} />
              <Square onClick={() => handleClick(7)} value={state[7]} />
              <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Board;
