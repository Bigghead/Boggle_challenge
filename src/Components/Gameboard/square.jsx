import React from 'react';

const Square = ({ isSelected, char , currentRow, currentCol, squareClick }) => {
    return (
        <button className={ isSelected ? 'selected' : '' }
                onClick={ () => squareClick(currentRow, currentCol)}
        
        >
            { char }
        </button>
    );
};

export default Square;