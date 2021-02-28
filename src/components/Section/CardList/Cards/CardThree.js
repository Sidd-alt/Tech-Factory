import React from 'react';
import AuthorRating from './AuthorRating/AuthorRating';
import Price from './Price/Price';
import CppLogo from '../../../Assets/LanguagesLogo/CppLogo.svg';

function CardsThree(props) {
    return (
        <div className="CardContainer">
            <div className="lanLogo bgCardThree">
                <img src={CppLogo} alt="" width="150px" height="150px"/>
            </div>
            <div className="cardContent">
                <div >
                    <p className="lanName">C++</p>
                </div>
                <div>
                    <p>
                        Our C++ tutorial covers basic concepts, data types, 
                        arrays, pointers, conditional statements, loops, 
                        functions, classes, objects, inheritance, and polymorphism.
                    </p>
                </div>
                <AuthorRating />
                <Price />
            </div>
        </div>
    );
}

export default CardsThree;