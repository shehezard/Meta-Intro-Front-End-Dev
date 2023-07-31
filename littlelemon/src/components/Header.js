import Nav from '../components/Nav';

import logoheader from '../assets/logoheader.png';

const Header = () => {
    return (
        <div className="header">
            <header>
                <img src={logoheader} alt="Header Logo" />
            </header>
            <Nav></Nav>
        </div>
    );
};

export default Header;
