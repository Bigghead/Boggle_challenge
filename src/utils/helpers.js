/**
 * Got from https://stackoverflow.com/questions/43816484/finding-the-neighbors-of-2d-array
 * @param {*} array 
 * @param {*} row 
 * @param {*} col 
 */
export const isNeighbor = ( array, row, col ) => {

    let neighbors = [];

        for ( let  nr = Math.max(0, row - 1); nr <= Math.min(row + 1, array.length - 1); ++nr){
            for ( let nc = Math.max(0, col - 1); nc <= Math.min(col + 1, array[0].length - 1); ++nc) {
                if (!(nr===row && nc===col))  { 
                    neighbors.push(array[nr][nc])
                }
            }
        }

    return neighbors.some( cell => cell.isSelected === true );
}


export const countScore = ( word ) => {
    const scores = {
        1: 0,
        2: 0,
        3: 1,
        4: 1,
        5: 2,
        6: 3,
        7: 5,
        8: 11
    }

    return scores[ word.length ];
}