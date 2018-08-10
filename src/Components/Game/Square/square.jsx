import React from 'react';

import './square.css';

const Square = ({ isSelected, char , currentRow, currentCol, cellClick }) => {
    return (
        <button className={ 'cell ' + ( isSelected ? 'selected_square' : '' ) }
                onClick={ () => cellClick(currentRow, currentCol)}
        >
            { char }
        </button>
    );
};

export default Square;