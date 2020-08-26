import React, {useState} from 'react';

const Learn = () => {
    const library = JSON.parse(localStorage.getItem('library')) || [{id: 0, word: '', translate: ''}];

    const [index, setIndex] = useState(0),
        [end, setEnd] = useState(false),
        word = library[index];

    const nextWord = () => {
        if (library.length - 1 !== index) {
            setIndex(index + 1);
        } else {
            setEnd(true);
        }
    }

    const repeatLearn = () => {
        setEnd(false);
        setIndex(0);
    } 

    return (
        <div className="learn">
            <div className="learn-block">
                {
                    end ? 
                    null :
                    <div className="percentage">50%</div>                    
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