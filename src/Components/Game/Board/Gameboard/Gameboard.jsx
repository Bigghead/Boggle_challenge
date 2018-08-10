import React from 'react';

import './Gameboard.css';
import Square from '../../Square/square';


/**
 * 
 * @param { array<array<string>> } gridArray 
 * @param { function(num, num) } cellClick
 * build html grid of 5 row divs with 5 nested square elements in each
 */
const buildGrid = ( gridArray, cellClick ) => {
    return gridArray.map( ( array, index ) => {
        return ( 
            <div key={ Math.floor( Math.random() * 10000 ) } className='grid_row'>
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

const Gameboard = ( { board, currentWord, cellClick, submit } ) => {
    return (
        <div className='game_board'>
            { buildGrid(board, cellClick) }
            <div className='submit_button_row'>
                <button type='submit'
                    className='submit_button'
                    onClick={ () => submit(currentWord) }>Submit</button>
            </div>
        </div>
    );
};

export default Gameboard;