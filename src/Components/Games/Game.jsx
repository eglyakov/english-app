import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CheckMode from './CheckMode.jsx';
import WriteMode from './WriteMode.jsx';

export default (props) => {
    const location = useLocation(),
        [correctAnswer, setCorrectAnswer] = useState(0),
        [wrongAnswer, setWrongAnswer] = useState(0);

    return (
        <div className="game">
            <div className="game-header">
                <NavLink to='../training'><button className="btn-exit">EXIT</button></NavLink>

                <div className="point-block">
                    <div className="correct">Correct: {correctAnswer}</div>
                    <div className="errors">Errors: {wrongAnswer}</div>
                </div>
                <div className="score">Score: {props.score}</div>
            </div>
            {
                location.pathname === '/training/check-mode' ? 
                <CheckMode
                    setScore={props.setScore}
                    score={props.score}

                    setCorrectAnswer={setCorrectAnswer}
                    correctAnswer={correctAnswer}

                    setWrongAnswer={setWrongAnswer}
                    wrongAnswer={wrongAnswer}
                /> :
                location.pathname === '/training/check-mode' ?
                <WriteMode /> : null
            }
        </div>
    )
}