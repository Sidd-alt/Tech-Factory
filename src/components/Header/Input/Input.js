import React from 'react';
import './Input.css';

function Input(props) {
    return (
        <div className="inputContainer">
            <input placeholder="search for anything"  className="Input" type="search"/>
        </div>
    );
}

export default Input;