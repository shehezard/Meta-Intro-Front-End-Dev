import React from "react";

import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <a key="about" href="#about">
                    <li>About</li>
                </a>
                <Link to="/menu"><li>Menu</li></Link>
                <Link to="/booking"><li>Reservations</li></Link>
                <a href="#orderonline">
                    <li>Order Online</li>
                </a>
                <a href="#login">
                    <li>Login</li>
                </a>
            </ul>
        </nav>
    );
};

export default Nav;