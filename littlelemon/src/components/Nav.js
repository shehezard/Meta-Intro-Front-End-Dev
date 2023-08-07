import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useBookingFormContext } from "../context/BookingFormContext";

const Nav = (props) => {
    const { toggleBookingForm } = useBookingFormContext();

    const [a, setLink] = useState(null);
    const [useEffectTriggered, setUseEffectTriggered] = useState(false);

    const HandleClick = (e) => {
        setLink(e.currentTarget.getAttribute("refto"));
        setUseEffectTriggered(false);
    };

    useEffect(() => {
        if (useEffectTriggered)
            return;

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

            setUseEffectTriggered(true);
        }, 10);

        return () => clearTimeout(timeout);
    });

    return (
        <div key={props.className} className={props.className}>
            <nav>
                <ul>
                    <Link to="/" onClick={HandleClick}><li>Home</li></Link>
                    <Link to="/" refto="about" onClick={HandleClick}><li>About</li></Link>
                    <Link to="/menu"><li>Menu</li></Link>
                    <a href="#book" onClick={toggleBookingForm}><li>Reservations</li></a>
                    <a href="#orderonline">
                        <li>Order Online</li>
                    </a>
                    <a href="#login">
                        <li>Login</li>
                    </a>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;