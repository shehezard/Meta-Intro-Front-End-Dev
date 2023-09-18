import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useBookingFormContext } from "../context/BookingFormContext";
import { useStyleContext } from "../context/StyleContext";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Nav = ({ className }) => {
    const showComingSoon = () => {
        toast.success('Coming Soon!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const { toggleBookingForm } = useBookingFormContext();
    const { classHeaderButton, classHighlightText } = useStyleContext();

    const [link, setLink] = useState(null);
    const [useEffectTriggered, setUseEffectTriggered] = useState(false);

    const HandleClick = (e) => {
        setLink(e.currentTarget.getAttribute("refto"));
        setUseEffectTriggered(false);
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
                    <a href="#book" onClick={toggleBookingForm} aria-label="Reservations"><li className={navClass}>Reservations</li></a>
                    <a href="#orderonline" onClick={showComingSoon} aria-label="Order Online"><li className={navClass}>Order Online</li></a>
                    <a href="#login" onClick={showComingSoon} aria-label="Login"><li className={navClass}>Login</li></a>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;