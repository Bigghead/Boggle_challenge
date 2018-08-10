import React, { Component } from 'react';
import './App.css';

import GameBoard from './Components/Gameboard/Gameboard';

import { allDice, shuffleBoard , buildCharacterGrid, isNeighbor } from './utils/board';


class App extends Component {

    state = {
        board: buildCharacterGrid( shuffleBoard(allDice) ),
        clickedCells : []
    }


    canClick = ( board, currentCells, char, currentRow, currentCol, currentIndex ) => {
        // first click?
        if( currentCells.length === 0 && currentIndex === currentCol ) {
            this.addCell( currentRow, currentCol );
            return !char.isSelected;
        }

        // right cell?
        if( currentIndex === currentCol ) {

            // is it currently selected ? Does it have selected neightbors?
            if( !char.isSelected && isNeighbor(board, currentRow, currentCol) ) {
                this.addCell( currentRow, currentCol );
                return true;
            };
            if( this.isLastCellClicked( char, currentRow, currentCol ) ) {
                return !char.isSelected;
            }
        }

        // cant click, leave as is
        return char.isSelected;
    }


    addCell = ( row, col ) => {
        this.setState({
            clickedCells: [ ...this.state.clickedCells, [ row, col ] ],
        } );
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
        } 
        return false;
    }


    cellClick = ( currentRow, currentCol ) => {
        const { board, clickedCells } = this.state;
        let row = board[currentRow];


        let newRow = row.map( ( char, i ) => { 
            return { 
                ...char, 
                isSelected : this.canClick( board, clickedCells, char, currentRow, currentCol, i) 
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
                <GameBoard board={ this.state.board } cellClick={ (row, col) => this.cellClick(row,col) }></GameBoard>
            </div>
        );
    }
}





export default App;
