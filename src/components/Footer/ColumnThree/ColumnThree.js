import React from 'react';
import Logo from '../../Assets/Logo/tech_factory_logo.svg';
import './ColumnThree.css'

function ColumnThree(props) {
    return (
        <div className="ColumnThree">
            <div className="endLogo">
                <img src={Logo} alt="" width="120px" height="120px"/>
            </div>
            <div>
                <p className="rights">@2020 Tech Factory, inc</p>
            </div>

        </div>
    );
}

export default ColumnThree;