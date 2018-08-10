import React from 'react';

import './square.css';

const Square = ({ isSelected, char , currentRow, currentCol, squareClick }) => {
    return (
        <button className={ isSelected ? 'selected_square' : '' }
                onClick={ () => squareClick(currentRow, currentCol)}
        
        >
            { char }
        </button>
    );
};

export default Square;