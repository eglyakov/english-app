import React from 'react';
import logo from '../img/logo.png'
import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav">
            <div className="nav_block">
                <div className="logo"><img src={logo} alt="logo"/></div>
                <div className="level">Level 0</div>
            </div>

            <ul>
                <li><NavLink to='/library'>Library</NavLink></li>
                <li><NavLink to='/training'>Training</NavLink></li>
                <li><NavLink to='/learn'>Learn</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;