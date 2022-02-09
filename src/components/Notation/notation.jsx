import StarEmpty from '../../assets/Star_empty.svg';
import StarFull from '../../assets/Star_full.svg';
import '../../utils/Style/notation.css';

function Notation({ rating }) {
    const range = [1, 2, 3, 4, 5];
    return (
        <div className="notation-ctn">
            {range.map((rangeElem) => {
                const isRange = rating >= rangeElem;
                return (
                    <img
                        key={rangeElem.toString()}
                        src={isRange ? StarFull : StarEmpty}
                        alt={isRange ? 'Etoile pleine' : 'Etoile vide'}
                    />
                );
            })}
        </div>
    );
}

export default Notation;
