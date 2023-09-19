import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useBookingFormContext } from "../context/BookingFormContext";
import { useStyleContext } from "../context/StyleContext";

import hamburger from '../assets/hamburger.png';

import { showNotification } from "../utils";

const Nav = (props) => {
    const { toggleBookingForm } = useBookingFormContext();
    const { classHeaderButton, classHighlightText } = useStyleContext();

    const [link, setLink] = useState(null);
    const [useEffectTriggered, setUseEffectTriggered] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const HandleClick = (e) => {
        ToggleMenu();

        setLink(e.currentTarget.getAttribute("refto"));
        setUseEffectTriggered(false);
    };

    const ToggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const showComingSoon = (e) => {
        ToggleMenu();

        showNotification("Coming Soon!");
    };

    const showBookingForm = (e) => {
        ToggleMenu();

        toggleBookingForm(e);
    };

    const navClass = props.className === "navheader" ? classHeaderButton : classHighlightText;

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

    return props.isMobile === true ?
        (
            <div key={props.className} className={props.className}>
                <Link onClick={ToggleMenu} aria-label="Menu Toggle" className="hamburger"><img src={hamburger} alt="Menu Toggle" /></Link>
                <nav className={isOpen ? 'active' : ''}>
                    <ul>
                        <Link to="/" onClick={HandleClick} aria-label="Home"><li className={navClass}>Home</li></Link>
                        <Link to="/" refto="about" onClick={HandleClick} aria-label="About"><li className={navClass}>About</li></Link>
                        <Link to="/menu" onClick={HandleClick}><li className={navClass} aria-label="Menu">Menu</li></Link>
                        <Link onClick={showBookingForm} aria-label="Reservations"><li className={navClass}>Reservations</li></Link>
                        <Link onClick={showComingSoon} aria-label="Order Online"><li className={navClass}>Order Online</li></Link>
                        <Link onClick={showComingSoon} aria-label="Login"><li className={navClass}>Login</li></Link>
                    </ul>
                </nav>
            </div>
        ) :
        (
            <div key={props.className} className={props.className}>
                <nav className="">
                    <ul>
                        <Link to="/" onClick={HandleClick} aria-label="Home"><li className={navClass}>Home</li></Link>
                        <Link to="/" refto="about" onClick={HandleClick} aria-label="About"><li className={navClass}>About</li></Link>
                        <Link to="/menu" onClick={HandleClick}><li className={navClass} aria-label="Menu">Menu</li></Link>
                        <Link onClick={showBookingForm} aria-label="Reservations"><li className={navClass}>Reservations</li></Link>
                        <Link onClick={showComingSoon} aria-label="Order Online"><li className={navClass}>Order Online</li></Link>
                        <Link onClick={showComingSoon} aria-label="Login"><li className={navClass}>Login</li></Link>
                    </ul>
                </nav>
            </div>
        );
};

export default Nav;