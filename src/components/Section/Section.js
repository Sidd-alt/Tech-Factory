import React from 'react';
import Navigation from './Navigation/Navigation';
import CardList from './CardList/CardList';


function Section(props) {
    return (
        <div>
            <Navigation />
            <CardList />
        </div>
    );
}

export default Section;