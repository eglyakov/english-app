import React, { useState } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav.jsx';
import Score from './Components/Score.jsx';
import Library from './Components/Library.jsx';
import Training from './Components/Training.jsx';
import Learn from './Components/Learn.jsx';
import Game from './Components/Games/Game.jsx';

function App() {
  const countLevel = () => {
    return Math.floor(0.5 + Math.sqrt(1 + 8 * score / 5) / 2) - 1;
  }

  const [score, setScore] = useState(+localStorage.getItem('score') || 0),
    [level, setLevel] = useState(countLevel());

  const CheckLevel = () => {
    setLevel(countLevel());
  }

  return (
    <BrowserRouter>
    <div className="app">
      <Nav level={level} />

      <div className="main">
        <Score score={score} />
        <Route path='/library' component={Library}/>
        <Route path='/training' component={Training}/>
        <Route path='/learn'>
          <Learn setScore={setScore}
                score={score}
                CheckLevel={CheckLevel}
          />
        </Route>

        <Route path='/training/check-mode'> 
          <Game setScore={setScore}
                score={score}
                CheckLevel={CheckLevel}
          />
        </Route>
        <Route path='/training/write-mode'> 
          <Game setScore={setScore}
                score={score}
                CheckLevel={CheckLevel}
          />
        </Route>
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
