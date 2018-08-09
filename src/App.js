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
        const { board } = this.state;
        console.log(currentRow, currentCol);
        let row = board[currentRow];
        let newRow = row.map( ( char, i ) => { 
            return { ...char, isSelected : i === currentCol };
         } );
        console.log(newRow)

        // === update state with new clicked square === //
        this.setState( {
            board: board.map( ( boardRow, i ) => {
                if( i === currentRow ) { 
                    console.log( [ ...newRow ] );
                    return [...newRow ];
                }
                return boardRow;
            } )
        } , () => console.log(this.state.board))
        
    }

    render() {
        return (
            <div className="App">
                <GameBoard board={ this.state.board } squareClick={ (row, col) => this.squareClick(row,col) }></GameBoard>
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
            boardGrid[i][j] = { char, isSelected: false };
        }
     }
    return boardGrid;
};



export default App;
