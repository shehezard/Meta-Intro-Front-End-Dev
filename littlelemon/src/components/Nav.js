import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useBookingFormContext } from "../context/BookingFormContext";
import { useStyleContext } from "../context/StyleContext";

import { showNotification } from "../utils";

const Nav = ({ className }) => {
    const { toggleBookingForm } = useBookingFormContext();
    const { classHeaderButton, classHighlightText } = useStyleContext();

    const [link, setLink] = useState(null);
    const [useEffectTriggered, setUseEffectTriggered] = useState(false);

    const HandleClick = (e) => {
        setLink(e.currentTarget.getAttribute("refto"));
        setUseEffectTriggered(false);
    };

    const showComingSoon = (e) => {
        showNotification("Coming Soon!");
    };

    const navClass = className === "navheader" ? classHeaderButton : classHighlightText;

    useEffect(() => {
        if (useEffectTriggered)
            return;

        const timeout = setTimeout(() => {
            const element = document.getElementById(link);

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
        <div key={className} className={className}>
            <nav>
                <ul>
                    <Link to="/" onClick={HandleClick} aria-label="Home"><li className={navClass}>Home</li></Link>
                    <Link to="/" refto="about" onClick={HandleClick} aria-label="About"><li className={navClass}>About</li></Link>
                    <Link to="/menu"><li className={navClass} aria-label="Menu">Menu</li></Link>
                    <Link onClick={toggleBookingForm} aria-label="Reservations"><li className={navClass}>Reservations</li></Link>
                    <Link onClick={showComingSoon} aria-label="Order Online"><li className={navClass}>Order Online</li></Link>
                    <Link onClick={showComingSoon} aria-label="Login"><li className={navClass}>Login</li></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;