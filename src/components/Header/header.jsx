import { Link, useLocation } from 'react-router-dom';
import '../../utils/Style/header.css';
import Logo from '../../assets/Logo_header.svg';

function Header() {
    const location = useLocation().pathname;
    return (
        <nav>
            <Link to="/">
                <img src={Logo} alt="logo_kaza" className="logo-header" />
            </Link>

            <div>
                <Link
                    to="/"
                    className={`header-link ${
                        location === '/' ? 'underline' : ''
                    }`}
                >
                    Accueil
                </Link>
                <Link
                    to="/about"
                    className={`header-link ${
                        location === '/about' ? 'underline' : ''
                    }`}
                >
                    A propos
                </Link>
            </div>
        </nav>
    );
}

export default Header;
