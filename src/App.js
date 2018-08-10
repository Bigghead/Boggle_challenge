import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GameBoard from './Components/Gameboard/Gameboard';

import { allDice, shuffleBoard , getRandomChar, isNeighbor } from './utils/board';


class App extends Component {

    state = {
        board: getCharacterGrid( shuffleBoard(allDice) ),
        clickedCells : []
    }


    canClick = ( board, currentCells, char, currentRow, currentCol, currentIndex ) => {
        // first click?
        if( currentCells.length === 0 && currentIndex === currentCol ) {
            this.setState({
                clickedCells: [ ...this.state.clickedCells, [ currentRow, currentCol ] ],
            } );
            return !char.isSelected;
        }

        // right cell?
        if( currentIndex === currentCol ) {

            // is it currently selected ? Does it have selected neightbors?
            if( !char.isSelected && isNeighbor(board, currentRow, currentCol) ) {
                this.setState({
                    clickedCells: [ ...this.state.clickedCells, [ currentRow, currentCol ] ],
                } );
                return true;
            };
            if( this.isLastCellClicked( char, currentRow, currentCol ) ) {
                return !char.isSelected;
            }
        }


        // cant click, leave as is
        return char.isSelected;
    }


    isLastCellClicked = ( char, row, col ) => {
        const { clickedCells } = this.state;
        if( clickedCells.length === 0 ) return true;
        const lastClicked = clickedCells[clickedCells.length -1];
        if( row === lastClicked[0] && col === lastClicked[1] ) {
            
            this.setState({
                clickedCells: clickedCells.slice(0, clickedCells.length -1)
            } )
            return true;
        } else {
            return false;
        }
    }


    squareClick = ( currentRow, currentCol ) => {
        const { board, clickedCells } = this.state;
        let row = board[currentRow];


        let newRow = row.map( ( char, i ) => { 
            return { 
                ...char, 
                // right cell ?
                    // is cell currently selected
                isSelected : this.canClick( board, clickedCells, char, currentRow, currentCol, i) 
                            // ? true
                            // : char.isSelected

                // ( i === currentCol )
                //      ? !char.isSelected
                //          ? ( isNeighbor(board, currentRow, currentCol) || clickedCells.length === 0) && true
                //          : false
                //      : char.isSelected
            
            };
        } );

        // === update state with new clicked square === //
        this.setState( {
            board: board.map( ( boardRow, i ) => {
                if( i === currentRow ) return newRow;
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
