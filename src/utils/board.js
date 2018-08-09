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

/**
 * 
 * @param { array<string> } board 
 */
export const shuffleBoard = board => {
    for (let i = 0; i < board.length; i++) {

        // choose random from 0 -> 25
        let randomIndex = Math.floor(Math.random() * board.length);
        let temp = board[ i ];

        // switch current element with random index element
        board[ i ] = board[ randomIndex ];
        board[ randomIndex ] = temp;
    }
    return board;
};