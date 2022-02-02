import { Link } from 'react-router-dom';
import '../../utils/Style/card.css';

function Card({ title, id }) {
    return (
        <Link to={`/logement/${id}`} className="card-link">
            <div className="card-item">
                <span className="card-title">{title}</span>
            </div>
        </Link>
    );
}

export default Card;
