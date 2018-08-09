import React from 'react';
import Square from './square';


const buildGrid = ( gridArray, squareClick ) => {
    return gridArray.map( ( array, index ) => {
    return ( 
        <div>
            { array.map( ( char, i ) => ( 
                <Square isSelected={ false}
                        char={ char } 
                        currentRow={ index }
                        currentCol={ i }
                        squareClick={ squareClick } >

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