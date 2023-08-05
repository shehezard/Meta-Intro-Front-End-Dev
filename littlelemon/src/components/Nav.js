import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';

import BookingForm from "./BookingForm";
import Popup from "./Popup";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [a, setLink] = useState(null);

    const togglePopup = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setIsOpen(!isOpen);
    }

    const HandleClick = (e) => {
        setLink(e.currentTarget.getAttribute("refto"));
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isOpen]);

    useEffect(() => {
        const timeout = setTimeout(() => {
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

        return () => clearTimeout(timeout);
    }, [a]);

    return (
        <nav>
            <ul>
                <Link to="/" onClick={HandleClick}><li>Home</li></Link>
                <Link to="/" refto="about" onClick={HandleClick}><li>About</li></Link>
                <Link to="/menu"><li>Menu</li></Link>
                <Link to="/" onClick={togglePopup}><li>Reservations</li></Link>
                <a href="#orderonline">
                    <li>Order Online</li>
                </a>
                <a href="#login">
                    <li>Login</li>
                </a>
            </ul>
            {isOpen && <Popup
                content={<BookingForm />}
                handleClose={togglePopup}
            />}
        </nav>

    );
};

export default Nav;