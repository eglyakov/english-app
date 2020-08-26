import React from 'react';
import screenMode1 from '../img/screenMode1.png';

export default () => {
    return (
        <div className="checkMode">
            <div className="text">
                <div className="title">Check words Mode</div>
                <div className="caption">Easy mode</div>
            </div>
            <img src={screenMode1} alt="#"/>
        </div>
    )
}
