import React from 'react';
import screenMode2 from '../img/screenMode2.png';

export default () => {
    return (
        <div className="writeMode">
            <div className="text">
                <div className="title">Write words Mode</div>
                <div className="caption">Hard mode</div>
            </div>
            <img src={screenMode2} alt="#"/>
        </div>
    )
}
