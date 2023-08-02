import React from 'react';
import './Sidebar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <img src={logo} alt="Logo" className="logo"></img>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contacto</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;