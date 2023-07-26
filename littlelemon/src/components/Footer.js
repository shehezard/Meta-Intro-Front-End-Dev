import logofooter from '../assets/logofooter.png';

const Footer = () => {
    return (
        <footer class="footer">
            <section class="footer-logo">
                <img src={logofooter} alt="Little Lemon Logo" />
            </section>
            <section class="footer-doormat">
                <p>Doormat Navigation</p>
            </section>
            <section class="footer-contact">
                <p>Contact Info</p>
            </section>
            <section class="footer-socials">
                <p>Socials</p>
            </section>
            <section class="footer-copyright">
                <p>&copy; 2023 Little Lemon. All rights reserved.</p>
            </section>
        </footer>
    );
};

export default Footer;