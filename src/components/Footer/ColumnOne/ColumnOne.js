import React from 'react';
import playButton from '../../Assets/GooglePlay/playButton.svg';
import './ColumnOne.css';

function ColumnOne(props) {
    return (
        <div className="ColumnOne">
            <div className="quickLinks">
                <p>Courses</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div>
                <img className="playButton" src={playButton} alt="" height="150px" width="150px"/>
            </div>
        </div>
    );
}

export default ColumnOne;