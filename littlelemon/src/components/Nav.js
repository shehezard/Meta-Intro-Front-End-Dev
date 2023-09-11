import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useBookingFormContext } from "../context/BookingFormContext";
import { useStyleContext } from "../context/StyleContext";

const Nav = ({className}) => {
    const { toggleBookingForm } = useBookingFormContext();
    const { classHeaderButton, classFooterLink } = useStyleContext();

    const [link, setLink] = useState(null);
    const [useEffectTriggered, setUseEffectTriggered] = useState(false);

    const HandleClick = (e) => {
        setLink(e.currentTarget.getAttribute("refto"));
        setUseEffectTriggered(false);
    };

    const navClass = className === "navheader" ? classHeaderButton : classFooterLink;

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
                    <Link to="/" onClick={HandleClick}><li className={navClass}>Home</li></Link>
                    <Link to="/" refto="about" onClick={HandleClick}><li className={navClass}>About</li></Link>
                    <Link to="/menu"><li className={navClass}>Menu</li></Link>
                    <a href="#book" onClick={toggleBookingForm}><li className={navClass}>Reservations</li></a>
                    <a href="#orderonline"><li className={navClass}>Order Online</li></a>
                    <a href="#login"><li className={navClass}>Login</li></a>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;