import React from 'react';

import { allDice, shuffleBoard , getRandomChar } from '../../utils/board';
import Square from './square';


/**
 * 
 * @param { array<string> } shuffledBoard array of already shuffled list of dice
 * make an empty 2d array of 5 x 5
 * for every cell in 2d array, put in an element from shuffledBoard ( the last in this case, since we pop )
 */
const getCharacterGrid = ( shuffledBoard ) => {

    let emptyArr = Array.from( {length: 5 }, (_, i) => undefined ) ;
    let boardGrid = [];

    for( let i = 0; i < 5; i ++ ) { 
        boardGrid.push(emptyArr.slice());
        for( let j = 0; j < 5; j ++ ) {
            let char = getRandomChar(shuffledBoard.pop());
            boardGrid[i][j] = char;
        }
     }
    return boardGrid;
}


const buildGrid = () => {
    let boardGrid = getCharacterGrid( shuffleBoard(allDice) );
    return boardGrid.map( ( array, index ) => {
    return ( 
        <div>
            { array.map( ( char, i ) => ( 
                <Square isSelected={ false} char={ char }>

                </Square>
            ) )}
        </div> );
    })
}

const Gameboard = () => {
    return (
        <div>
            { buildGrid() }
        </div>
    );
};

export default Gameboard;