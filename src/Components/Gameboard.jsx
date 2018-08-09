import React from 'react';

import { allDice, shuffleBoard , getRandomChar } from '../utils/board'


const renderBoard = ( array ) => {
    return array.map( ( dice, index ) => {
    return( <h1 key={ index }>{ getRandomChar(dice)  }</h1> );
    } );
};


/**
 * 
 * @param { array<string> } shuffledBoard array of already shuffled list of dice
 * make an empty 2d array of 5 x 5
 * for every cell in 2d array, put in an element from shuffledBoard ( the last in this case, since we pop )
 */
const renderGrid = ( shuffledBoard ) => {

    let emptyArr = Array.from( {length: 5 }, (_, i) => undefined ) ;
    let boardGrid = [];
    
    for( let i = 0; i < 5; i ++ ) { 
        boardGrid.push(emptyArr.slice());
        for( let j = 0; j < 5; j ++ ) {
            let char = getRandomChar(shuffledBoard.shift());
            boardGrid[i][j] = char;
        }
     }
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