import logofooter from '../assets/logofooter.png';
import Nav from './Nav';

import { useStyleContext } from "../context/StyleContext";

import "./Footer.css";

const Footer = () => {
    const { classSectionTitle, classHighlightText } = useStyleContext();

    return (
        <footer className="footer">
            <section className="footer-logo">
                <a href="#"><img src={logofooter} alt="Footer Logo" /></a>
            </section>
            <div className="footer-links">
                <section className="doormat-links">
                    <h2 className={classSectionTitle}>Doormat Navigation</h2>
                    <Nav className="navdoormat" />
                </section>
                <section className="contact" id="contact">
                    <h2 className={classSectionTitle}>Contact Us</h2>
                    <p className={classHighlightText}>Little Lemon</p>
                    <p className={classHighlightText}>123 Lemon Street</p>
                    <p className={classHighlightText}>Toronto, ON M1M 1M1</p>
                    <p className={classHighlightText}>416-123-4567</p>
                </section>
                <section className="social-media">
                    <h2 className={classSectionTitle}>Social Media Links</h2>
                    <ul>
                        <a href="#"><li className={classHighlightText}>Facebook</li></a>
                        <a href="#"><li className={classHighlightText}>Instagram</li></a>
                        <a href="#"><li className={classHighlightText}>Twitter</li></a>
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