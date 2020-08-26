import React from 'react';
import Mode1 from './Mode1.jsx';
import Mode2 from './Mode2.jsx';
import {NavLink} from 'react-router-dom';

const Training = () => {
    return (
        <div className="training">
            <NavLink to='/training/check-mode'><Mode1 /></NavLink>
            <NavLink to='/training/write-mode'><Mode2 /></NavLink>
        </div>
    )
}

export default Training;