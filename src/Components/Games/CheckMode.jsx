import React, { useState, useEffect } from 'react';

export default (props) => {
    const checkWords = (word) => {

        if(library.length - 1 !== currentWordIndex) {
            if(word === library[currentWordIndex].word) {
                props.setCorrectAnswer(props.correctAnswer + 1)
                props.setScore(props.score + 1)
                setCurrentWordIndex(currentWordIndex + 1);
            } else {
                props.setWrongAnswer(props.wrongAnswer + 1)
            }
        } else {
            alert('Well done');
            props.setCorrectAnswer(0);
            props.setWrongAnswer(0);
            setCurrentWordIndex(0);
        }      
    }

    const [currentWordIndex, setCurrentWordIndex] = useState(0),
        [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library'))),
        [checkArr, setCheckArr] = useState([]),
        currentWord = library[currentWordIndex].translate,
        [initialScore, setInitialScore] = useState(props.score);

    useEffect(() => {
        const filterArr = library.filter((item, index) => index !== currentWordIndex);
        filterArr.sort(() => Math.random() - 0.5);

        const checkArr = [filterArr[0].word, filterArr[1].word, library[currentWordIndex].word];
        setCheckArr(checkArr.sort(() => Math.random() - 0.5));
    }, [props.correctAnswer])

    useEffect(() => {
        return () => {
            props.setScore(initialScore)
        }
    }, [])

    return (
        <div className="checkModeGame">
            <div className="word-block">
                <div className="word">{currentWord}</div>
                <div className="caption">Set translation fo this word</div>
            </div>
            <div className="translat-block">
                {
                    checkArr.map((item, index) => 
                    <div key={index} className="translat" onClick={() => checkWords(item)}> 
                        {item}
                    </div>)
                }
            </div>
        </div>
    )
}