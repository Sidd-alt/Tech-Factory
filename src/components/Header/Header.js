import React from 'react';
import Logo from '../Assets/Logo/tech_factory_logo.svg';
import Input from '../Header/Input/Input';
import Categories from '../Header/Categories/Categories';
import Cart from '../Assets/Cart/Cart';
import Heart from '../Assets/Heart/heart.svg'
import Account from './Account/Account';
import './Header.css'

function Header(props) {
    return (
        <div className="Header">
            <div className="subHeader1">
                <img className="Logo" src={Logo} alt="" height="200px" width="200px"/>
                <Categories />
                <Input />
            </div>
            <div className="subHeader2">
                <p className="myCourses">My Courses</p>
                <Cart />
                <img style={{cursor: 'pointer'}} src={Heart} alt=""/>
                <Account />
            </div>
        </div>
    );
}

export default Header;