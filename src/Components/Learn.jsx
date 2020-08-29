import React, {useState, useEffect} from 'react';

const Learn = ({setScore, score, CheckLevel}) => {
    const library = JSON.parse(localStorage.getItem('library')) || [{id: 0, word: '', translate: ''}];

    const [index, setIndex] = useState(0),
        [end, setEnd] = useState(false),
        word = library[index];

    const nextWord = () => {
        if (library.length - 1 !== index) {
            setIndex(index + 1);
            setScore(score + 0.5);
            CheckLevel();
            library[index].correct += 1;
            library[index].learn += 1;
            // library[index].learn = Math.floor((word.learn + word.correct - word.error) / 5 * 10);
            localStorage.setItem('library', JSON.stringify(library));
        } else {
            setEnd(true);
        }
    }

    const repeatLearn = () => {
        setEnd(false);
        setIndex(0);
    } 

    useEffect(() => {
        localStorage.setItem('score', score);
    }, [score]) 

    return (
        <div className="learn">
            <div className="learn-block">
                {
                    end ? 
                    null :
                    <div className="percentage">{word.learn}%</div>                    
                }
                <div className="word">
                    {end ? 'Well done!' : word.translate}
                </div>
                {
                    end ?
                    null:
                    <div className="word-translation">
                        <div className="caption">Translation</div>
                        <div className="translation">{word.word}</div>
                    </div>
                }
            </div>
            {
                end ? 
                <div onClick={repeatLearn} className="btn-repeat">&#10226;</div> :
                <div onClick={nextWord} className="btn-next">&#8594;</div>
            }
        </div>
    )
}

export default Learn;