import Nav from '../components/Nav';

import logoheader from '../assets/logoheader.png';

const Header = () => {
    return (<>
        <header>
            <img src={logoheader} alt="Little Lemon Logo" />
        </header>
        <Nav></Nav>
    </>
    );
};

export default Header;
