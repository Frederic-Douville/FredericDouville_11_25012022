import Logo from '../../assets/Logo_footer.svg';
import '../../utils/Style/footer.css';

function Footer() {
    return (
        <div className="footer-ctn">
            <img src={Logo} alt="logo-footer" className="logo-footer" />
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;
