import React from 'react';
import rating from '../../../../Assets/Rating/rating.svg';
import './AuthorRating.css'

function AuthorRating(props) {
    return (
        <div className="AuthorRating">
            <div>
                <p className="authorName">By Emma Jones</p>
            </div>
            <div className="rating">
                <img className="stars" src={rating} alt="" width="80px" height="80px"/>
                <p className="numbers">4.6</p>
            </div>
        </div>
    );
}

export default AuthorRating;