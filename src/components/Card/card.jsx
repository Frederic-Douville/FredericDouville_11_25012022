import { Link } from 'react-router-dom';
import '../../utils/Style/card.css';

function Card({ title, id, cover }) {
    return (
        <Link to={`/logement/${id}`} className="card-link">
            <div className="card-item">
                <img src={cover} alt={`img${id}`} />
                <div className="card-title-ctn">
                    <span className="card-title">{title}</span>
                </div>
            </div>
        </Link>
    );
}

export default Card;
