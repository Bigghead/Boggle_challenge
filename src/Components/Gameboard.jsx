import React from 'react';

import { allDice, shuffleBoard , getRandomChar} from '../utils/board'


const renderBoard = ( array ) => {
    return array.map( ( dice, index ) => {
    return( <h1 key={ index }>{ getRandomChar(dice)  }</h1> );
    } );
};


const renderGrid = ( array ) => {
    let emptyArr = Array.from( {length: 5 }, (_, i) => undefined ) ;
    let boardGrid = [];
    for( let i = 0; i < 5; i ++ ) { boardGrid.push(emptyArr); }
    return boardGrid;
}

const Gameboard = () => {
    console.log( renderBoard( shuffleBoard(allDice) ) );
    console.log(renderGrid(shuffleBoard(allDice) ) );
    return (
        <div>
            { renderBoard( shuffleBoard(allDice) ) }
        </div>
    );
};

export default Gameboard;