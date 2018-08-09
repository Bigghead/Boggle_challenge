export const allDice = [
    'aaafrs',
    'aaeeee',
    'aafirs',
    'adennn',
    'aeeeem',
    'aeegmu',
    'aegmnn',
    'afirsy',
    'bjkqxz',
    'ccenst',
    'ceiilt',
    'ceilpt',
    'ceipst',
    'ddhnot',
    'dhhlor',
    'dhlnor',
    'dhlnor',
    'eiiitt',
    'emottt',
    'ensssu',
    'fiprsy',
    'gorrvw',
    'iprrry',
    'nootuw',
    'ooottu'
];

export const getRandomIndex = ( length ) => Math.floor( Math.random() * length );

/**
 * 
 * @param { array<string> } board 
 * swap random elements in board
 */
export const shuffleBoard = board => {
    for (let i = 0; i < board.length; i++) {

        // choose random from 0 -> 25
        let randomIndex = getRandomIndex(board.length);
        let temp = board[ i ];

        // switch current element with random index element
        board[ i ] = board[ randomIndex ];
        board[ randomIndex ] = temp;
    }
    return board;
};


/**
 * 
 * @param { array<string> } dice 
 * returns a random chareacter from die
 */
export const getRandomChar = ( dice ) => {
    return dice[ getRandomIndex( dice.split('').length ) ];
}