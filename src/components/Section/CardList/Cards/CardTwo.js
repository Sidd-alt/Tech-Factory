import React from 'react';
import AuthorRating from './AuthorRating/AuthorRating';
import Price from './Price/Price';
import PythonLogo from '../../../Assets/LanguagesLogo/PythonLogo.svg';

function CardsTwo(props) {
    return (
        <div className="CardContainer">
            <div className="lanLogo bgCardTwo">
                <img src={PythonLogo} alt="" width="80px" height="80px"/>
            </div>
            <div className="cardContent">
                <div>
                    <p className="lanName">PYTHON</p>
                </div>
                <div>
                    <p>
                        Learn Python, one of the today's most in-demand programming 
                        languages on-the-go! Practice writing Python code, collect
                        points, {`&`} off your skills now!
                    </p>
                </div>
                <AuthorRating />
                <Price />
            </div>
        </div>
    );
}

export default CardsTwo;