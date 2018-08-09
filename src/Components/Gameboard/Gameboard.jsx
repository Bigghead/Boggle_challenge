import React from 'react';
import Square from './square';


const buildGrid = ( gridArray, squareClick ) => {
    return gridArray.map( ( array, index ) => {
    return ( 
        <div key={ Math.floor( Math.random() * 1000 ) }>
            { array.map( ( char, i ) => ( 
                <Square key={ Math.floor( Math.random() * 1000 ) }
                        isSelected={ false}
                        char={ char } 
                        currentRow={ index }
                        currentCol={ i }
                        squareClick={ (row, col) => squareClick(row, col) } >

                </Square>
            ) )}
        </div> );
    })
}

const Gameboard = ( { board, squareClick } ) => {
    return (
        <div>
            { buildGrid(board, squareClick) }
        </div>
    );
};

export default Gameboard;