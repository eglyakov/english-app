import React from 'react';
import logo from '../img/logo.png'
import {NavLink} from 'react-router-dom';

const Nav = ({level}) => {
    return (
        <nav className="nav">
            <div className="nav_block">
                <div className="logo"><img src={logo} alt="logo"/></div>
                <div className="level">Level {level}</div>
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