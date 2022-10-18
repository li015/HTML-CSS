/****************************************************************************
  FileName      [ Row.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the Row. ]
  Copyright     [ 2022 10 ]
****************************************************************************/

import "./css/Row.css";
import React from 'react';


const Row = ({ guess, rowIdx }) => {
    return (
        <div className='Row-container'>
            {/* TODO 3: Row Implementation -- Row */}
            {/* ↓ Default row, you should modify it. ↓ */}
            <div className='Row-wrapper'>
                <div className='Row-wordbox'> A
                </div>
                <div className='Row-wordbox'>B</div>
                <div className='Row-wordbox'>C</div>
                <div className='Row-wordbox'>D</div>
                <div className='Row-wordbox'>E</div>
            </div>
            {/* ↑ Default row, you should modify it. ↑ */}
            
        </div>
    )
}

export default Row;