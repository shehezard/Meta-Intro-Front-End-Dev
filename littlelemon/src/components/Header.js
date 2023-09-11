import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

import Nav from '../components/Nav';

import logoheader from '../assets/logoheader.png';

import "./Header.css";

const Header = () => {
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  const HandleClick = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      prevScrollY.current < currentScrollY
        ? headerRef.current.style.transform = "translateY(-100px)"
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
        zIndex: 10
      }}
    >
      <Link onClick={HandleClick}><img src={logoheader} alt="Header Logo" /></Link>
      <Nav className="navheader" />
    </header>
  );
};

export default Header;
