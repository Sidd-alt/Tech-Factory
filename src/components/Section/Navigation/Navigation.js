import React from 'react';
import SoftwareDevelopment from '../Navigation/SoftwareDevelopment/SoftwareDevelopment';
import Design from '../Navigation/Design/Design';
import Marketing from '../Navigation/Marketing/Marketing';
import CompetitiveExam from '../Navigation/CompetitiveExam/CompetitiveExam';
import It from './IT/IT';
import './Navigation.css'


function Navigation(props) {
    return (
        <div className="Navigation">
            <SoftwareDevelopment />
            <Design />
            <Marketing />
            <CompetitiveExam />
            <It />
        </div>
    );
}

export default Navigation;