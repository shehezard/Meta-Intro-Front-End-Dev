import React, { useEffect, useRef } from "react";

import Nav from '../components/Nav';

import logoheader from '../assets/logoheader.png';

const Header = () => {
    const headerRef = useRef(null);
    const prevScrollY = useRef(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
  
        prevScrollY.current < currentScrollY 
        ? headerRef.current.style.transform = "translateY(-84px)" 
        : headerRef.current.style.transform = "translateY(0)";
  
        prevScrollY.current = currentScrollY;
      };
  
      window.addEventListener("scroll", handleScroll);
      
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="header"
        ref={headerRef}
        style={{
            transition: "transform 400ms ease-in-out",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            transform: "translateY(0)",
            zIndex: 100
        }}
        >
            <img src={logoheader} alt="Header Logo" />
            <Nav></Nav>
        </header>
    );
};

export default Header;
