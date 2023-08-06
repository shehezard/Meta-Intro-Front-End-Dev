import logofooter from '../assets/logofooter.png';
import Nav from './Nav';

import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer-logo">
                <img src={logofooter} alt="Footer Logo" />
            </section>
            <div className="footer-links">
                <section className="doormat-links">
                    <h2>Doormat Navigation</h2>
                    <Nav className="navdoormat" />
                </section>
                <section className="contact" id="contact">
                    <h2>Contact Us</h2>
                    <p>Little Lemon</p>
                    <p>123 Lemon Street</p>
                    <p>Toronto, ON M1M 1M1</p>
                    <p>416-123-4567</p>
                </section>
                <section className="social-media">
                    <h2>Social Media Links</h2>
                    <ul>
                        <a href="#"><li>Facebook</li></a>
                        <a href="#"><li>Instagram</li></a>
                        <a href="#"><li>Twitter</li></a>
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