import React from "react";

import { Link } from 'react-router-dom';

const Nav = () => {
    let a = null;

    const HandleClick = (link) => {
        a = link.currentTarget.getAttribute("refto");

        setTimeout(() => {
            const element = document.getElementById(a);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            } else {
                window.scrollTo({ top: 0 });
            }
        }, 10);
    };

    return (
        <nav>
            <ul>
                <Link to="/" onClick={HandleClick}><li>Home</li></Link>
                <Link to="/" refto="about" onClick={HandleClick}><li>About</li></Link>
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