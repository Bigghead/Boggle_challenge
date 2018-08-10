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
 * @param { array<string> } shuffledBoard array of already shuffled list of dice
 * make an empty 2d array of 5 x 5
 * for every cell in 2d array, put in an element from shuffledBoard ( the last in this case, since we pop )
 */
export const buildCharacterGrid = ( ) => {
    let shuffledBoard = shuffleBoard(allDice);
    let emptyArr = Array.from( {length: 5 }, (_, i) => undefined ) ;
    let boardGrid = [];

    for( let i = 0; i < 5; i ++ ) { 
        boardGrid.push(emptyArr.slice());
        for( let j = 0; j < 5; j ++ ) {
            let char = getRandomChar(shuffledBoard.pop());
            boardGrid[i][j] = { char, isSelected: false };
        }
     }
    return boardGrid;
};


/**
 * 
 * @param { array<string> } dice 
 * returns a random chareacter from die
 */
export const getRandomChar = ( dice ) => {
    const character = dice[ getRandomIndex( dice.split('').length ) ];
    return  character === 'q'
            ? 'Qu'
            : character.toUpperCase()
}
