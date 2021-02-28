import React from 'react';
import AuthorRating from './AuthorRating/AuthorRating';
import Price from './Price/Price';
import JavaLogo from '../../../Assets/LanguagesLogo/JavaLogo.svg';

function CardOne(props) {
    return (
        <div className="CardContainer">
            <div className="lanLogo bgCardOne">
                <img src={JavaLogo} alt="" width="150px" height="150px"/>
            </div>
            <div className="cardContent">
                <div>
                    <p className="lanName">JAVA</p>
                </div>
                <div>
                    <p >
                        With our interactive Java course, you'll learn
                        object-oriented Java programming and have the 
                        ability to write clear and valid code in almost 
                        no time at all.
                    </p>
                </div>
                <AuthorRating />
                <Price />
            </div>
        </div>
    );
}

export default CardOne;