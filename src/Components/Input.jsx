import React from 'react';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            translation: '',
            value: '',
            library: JSON.parse(localStorage.getItem('library')) || [{id: 0, word: '', translate: ''}]
        }

        this.changeMode = this.changeMode.bind(this);
        this.getValue = this.getValue.bind(this);
        this.addWordToLibrary = this.addWordToLibrary.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', (event) => {
            if (this.state.value.length > 0 && !this.state.isOpen && event.key === 'Enter') {
                this.addWordToLibrary();
            }
        })
    }

    changeMode() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    async removeWordFromLibrary(index) {
        await this.setState(prevState => ({
            library: prevState.library.filter((word, i) => i !== index)
        }));
        await localStorage.setItem('library', JSON.stringify(this.state.library));
    }

    async addWordToLibrary() {
        try {
            const response = await fetch(`https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source=ru&target=en&input=${this.state.value}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
                    "x-rapidapi-key": "e26eac3dbdmsh8ece33b78595494p1c3bf9jsn4c578a9c4cb6"
                }
            });

            const result = await response.json();
            if(result.outputs) {
                await this.setState(prevState => ({
                    translation: result.outputs[0].output
                }));
            };

            await this.setState(prevState => ({
                library: [...prevState.library, {id: this.state.library.length, word: this.state.value, translate: this.state.translation }]
            }));

            await localStorage.setItem('library', JSON.stringify(this.state.library));

            await this.changeMode();

            await this.setState(() => ({
                translation: ''
            }))
        }

        catch (error) {
            console.log(error);
        }
    }

    async getValue(event) {
        const value = event.currentTarget.value;
        this.setState(() => ({
            value: value
        }))
    }

    render() {
        return (
            <div>
                <div className="input">
                    {
                    this.state.isOpen ?
                    <div className="caption-for-btn"><span>Add new word</span></div> :
                    <div className="fuction-add">
                        <input onChange={this.getValue} type="text" placeholder="Enter word" />
                        <span>{this.state.translation}</span>
                        <button onClick={this.addWordToLibrary} className="btn_add"></button>
                    </div>
                    }
                    <button onClick={this.changeMode} className={this.state.isOpen ? 'btn_plus' : 'btn_plus open'}></button>
                </div>

                <table className="tabel">
                    <thead>
                        <tr>
                            <th>Word</th>
                            <th>Translate</th>
                            <th>Learn level</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.library.map((word, index) => (
                        <tr key={index}>
                            <td>{word.id}</td>
                            <td>{word.word}</td>
                            <td>{word.translate}</td>
                            <td onClick={() => this.removeWordFromLibrary(index)}>Delete</td>
                        </tr> 
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Input;

