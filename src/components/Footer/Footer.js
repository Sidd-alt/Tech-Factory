import React from 'react';
import ColumnOne from './ColumnOne/ColumnOne';
import ColumnTwo from './ColumnTwo/ColumnTwo';
import ColumnThree from './ColumnThree/ColumnThree';
import './Footer.css'

function Footer(props) {
    return (
        <div className="Footer">
            <ColumnOne />
            <ColumnTwo />
            <ColumnThree />
        </div>
    );
}

export default Footer;