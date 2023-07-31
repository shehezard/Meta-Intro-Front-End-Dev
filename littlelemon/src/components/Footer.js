import logofooter from '../assets/logofooter.png';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-logo">
            <img src={logofooter} alt="Footer Logo"/>
        </div>
        <div className="copyright">
            <p>&copy; 2023 Little Lemon. All rights reserved.</p>
        </div>
    </footer>
    );
};

export default Footer;