import React from 'react';
import './Price.css';

function Price(props) {
    return (
        <div className="Price">
            <p className="discount">₹ 699.00</p>
            <p className="real">₹ 1,299.00</p>
        </div>
    );
}

export default Price;