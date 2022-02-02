import { Link } from 'react-router-dom';
import '../../utils/Style/error.css';

function Error() {
    return (
        <div className="error-ctn">
            <div className="error-msg-ctn">
                <p className="error-number">404</p>
                <p className="error-msg">
                    Oups! La page que vous demandez n'existe pas
                </p>
            </div>
            <Link to="/" className="error-link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}

export default Error;
