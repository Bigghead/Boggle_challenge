import React from 'react';

import './Scoreboard.css'

const Scoreboard = ( { currentWord, currentScore, allWords } ) => {
    return (
        <div className='score_table'>
            <h6>Current Word: { currentWord }</h6>
            <table>
                <thead>
                    <tr>
                        <th>Words</th>
                        <th>Score: { currentScore }</th>
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