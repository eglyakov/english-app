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
  const [score, setScore] = useState(0)
  return (
    <BrowserRouter>
    <div className="app">
      <Nav />
      <div className="main">
        <Score />
        <Route path='/library' component={Library}/>
        <Route path='/training' component={Training}/>
        <Route path='/learn' component={Learn}/>
        <Route path='/training/check-mode'> 
          <Game setScore={setScore}
                score={score}
          />
        </Route>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
