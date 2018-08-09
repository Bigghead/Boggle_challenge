import React from 'react';

const Square = ({ isSelected, char }) => {
    return (
        <button className={ isSelected ? 'selected' : '' }>
            { char }
        </button>
    );
};

export default Square;