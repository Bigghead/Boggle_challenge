import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GameBoard from './Components/Gameboard/Gameboard';

import { allDice, shuffleBoard , getRandomChar } from './utils/board';


class App extends Component {

    state = {
        board: getCharacterGrid( shuffleBoard(allDice) )
    }

    squareClick = ( currentRow, currentCol ) => {
        return function( currentRow, currentCol ){
            console.log(currentRow, currentCol);
        }
    }

    render() {
        return (
            <div className="App">
                <GameBoard board={ this.state.board } squareClick={ this.squareClick }></GameBoard>
            </div>
        );
    }
}

/**
 * 
 * @param { array<string> } shuffledBoard array of already shuffled list of dice
 * make an empty 2d array of 5 x 5
 * for every cell in 2d array, put in an element from shuffledBoard ( the last in this case, since we pop )
 */
const getCharacterGrid = ( ) => {
    let shuffledBoard = shuffleBoard(allDice);
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
};



export default App;
