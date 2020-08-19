import React from 'react';
import logo from '../img/logo.png'
// import { ReactComponent } from '*.svg';

// class Nav extends React.Component {
//     return (

//     )
// }

function Nav() {
    return (
        <nav className="nav">
            <div className="nav_block">
                <div className="logo"><img src={logo} alt="logo"/></div>
                <div className="level">Level 0</div>
            </div>

            <ul>
                <li className="active">Library</li>
                <li>Trainig</li>
                <li>Learn</li>
            </ul>
        </nav>
    );
}

export default Nav;