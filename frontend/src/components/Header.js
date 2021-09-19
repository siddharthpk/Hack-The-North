import './Header.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../logo.png';


const Header = (props) => {
    return(
        <header className="header">
            <img  className="header img" src={logo} alt="logo"/>
            <h1 className="center">Refugee  Refugee Response</h1>
            <button className="btn" component={Link} to ="/login">Login</button>
        </header>
    )
}

export default Header;