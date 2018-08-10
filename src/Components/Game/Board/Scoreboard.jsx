import React from 'react';

const Scoreboard = ( { allWords } ) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Words</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    { allWords.map( ( word, i ) => {
                        return ( 
                            <tr key={ word + i}>
                                <td>{ word.word }</td>
                                <td>{ word.score }</td>
                            </tr> 
                        );
                    }) }
                </tbody>
            </table>
            
        </div>
    );
};

export default Scoreboard;