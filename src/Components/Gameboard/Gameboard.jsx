import React from 'react';
import Square from './square';


const buildGrid = ( gridArray, cellClick ) => {
    return gridArray.map( ( array, index ) => {
    return ( 
        <div key={ Math.floor( Math.random() * 10000 ) }>
            { array.map( ( char, i ) => ( 
                <Square key={ Math.floor( Math.random() * 10000 ) }
                        isSelected={ char.isSelected}
                        char={ char.char } 
                        currentRow={ index }
                        currentCol={ i }
                        cellClick={ (row, col) => cellClick(row, col) } >

                </Square>
            ) )}
        </div> );
    })
}

const Gameboard = ( { board, cellClick } ) => {
    return (
        <div>
            { buildGrid(board, cellClick) }
        </div>
    );
};

export default Gameboard;