/****************************************************************************
  FileName      [ Board.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the Board. ]
  Copyright     [ 2022 10 ]
****************************************************************************/

import Row from "./Row";
import './css/Board.css';
import React from "react";
import CurRow from "./CurRow";

const Board = ({ turn, guesses, curGuess }) => {

    return (
        <div className="Board-container">
            {/* TODO 2-2: show 6 rows (map function is recommended) and defined row's key.
                Hint: Use `CurRow` instead of `Row` when you are passing `curGuess` into it. */}
            {
                guesses[0]?(<Row guess={guesses[0]}/>

                ):(<CurRow curGuess={curGuess}/>)
            }
            <Row guess={guesses[1]}/>
            <Row guess={guesses[2]}/>
            <Row guess={guesses[3]}/>
            {
                guesses[4]?(<Row guess={guesses[4]}/>

                ):(<CurRow curGuess={curGuess}/>)
            }
            {
                guesses[5]?(<Row guess={guesses[5]}/>

                ):(<CurRow curGuess={curGuess}/>)
            }
            
        </div>
    )
};
export default Board;
