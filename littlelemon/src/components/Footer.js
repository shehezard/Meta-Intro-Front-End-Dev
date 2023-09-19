import { useStyleContext } from "../context/StyleContext";
import { Link } from 'react-router-dom';

import { showNotification } from "../utils";

import Nav from './Nav';

import logofooter from '../assets/logofooter.png';

import "./Footer.css";

const Footer = () => {
    const {
        classSectionCategories,
        classHighlightText
    } = useStyleContext();

    const HandleClick = () => {
        window.scrollTo({ top: 0 });
    };

    const showComingSoon = (e) => {
        showNotification("Coming Soon!");
    };

    return (
        <footer className="footer" role="contentinfo">
            <section className="footer-logo">
                <Link onClick={HandleClick} aria-label="Go to top"><img src={logofooter} alt="Footer Logo" /></Link>
            </section>
            <div className="footer-links">
                <section className="doormat-links">
                    <h2 className={classSectionCategories}>Doormat Navigation</h2>
                    <Nav className="navdoormat" />
                </section>
                <section className="contact" id="contact">
                    <h2 className={classSectionCategories}>Contact Us</h2>
                    <p className={classHighlightText}>Little Lemon</p>
                    <p className={classHighlightText}>123 Lemon Street</p>
                    <p className={classHighlightText}>Toronto, ON M1M 1M1</p>
                    <p className={classHighlightText}>416-123-4567</p>
                </section>
                <section className="social-media">
                    <h2 className={classSectionCategories}>Social Media Links</h2>
                    <ul>
                        <Link onClick={showComingSoon} aria-label="Visit our Facebook page"><li className={classHighlightText}>Facebook</li></Link>
                        <Link onClick={showComingSoon} aria-label="Visit our Instagram page"><li className={classHighlightText}>Instagram</li></Link>
                        <Link onClick={showComingSoon} aria-label="Visit our Twitter page"><li className={classHighlightText}>Twitter</li></Link>
                    </ul>
                </section>
            </div>
            <section className="copyright">
                <p>&copy; 2023 Little Lemon. All rights reserved.</p>
            </section>
        </footer>
    );
};

export default Footer;