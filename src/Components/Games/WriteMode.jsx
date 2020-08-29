import React, {useRef, useState, useEffect} from 'react';

export default (props) => {
    const inputRef = useRef(),
        [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')).sort(() => Math.random() - 0.5) || [{id: 0, word: '', translate: ''}]),
        [index, setIndex] = useState(0);

    const checkEnterPress = (event) => {
        if(event.key === 'Enter') {
            checkGame();
        }
    }

    const checkGame = () => {
        if(index !== library.length - 1) {
            if(inputRef.current.value === library[index].translate.replace('the ', '').toLowerCase()) {
                setIndex(index + 1);
                props.setCorrectAnswer(props.correctAnswer + 1);
                props.setScore(props.score + 1);
                library[index].correct += 1;
                library[index].learn += 4;
                localStorage.setItem('library', JSON.stringify(library));
            } else {
                props.setWrongAnswer(props.wrongAnswer + 1);
                library[index].error += 1;
                localStorage.setItem('library', JSON.stringify(library));
            }
        } else {
            alert('Good job!');
            setLibrary(JSON.parse(localStorage.getItem('library')).sort(() => Math.random() - 0.5));
        }  

        inputRef.current.value = '';
    }

    useEffect(() => {
        localStorage.setItem('score', props.score);
    }, [props.score]) 

    return (
        <div className="writeModeGame">
            <div className="word-block">
                <div className="word">{library[index].word}</div>
                <div className="caption">Write translation fo this word</div>
            </div>
            <div className="input-block">
                <input onKeyPress={checkEnterPress} ref={inputRef} id='inputId' type="text" placeholder="Enter word" />
                <button onClick={checkGame} className="btn-enter">Enter</button>
            </div>
        </div>
    )
}