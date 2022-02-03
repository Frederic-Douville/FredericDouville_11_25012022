import StarEmpty from '../../assets/Star_empty.svg';
import StarFull from '../../assets/Star_full.svg';
import '../../utils/Style/notation.css';

function Notation(starTotal) {
    const range = [1, 2, 3, 4, 5];
    const fullStarTotal = starTotal.starTotal;
    return (
        <div className="notation-ctn">
            {range.map((rangeElem) =>
                fullStarTotal >= rangeElem ? (
                    <img
                        key={rangeElem.toString()}
                        src={StarFull}
                        alt="Etoile pleine"
                    />
                ) : (
                    <img
                        key={rangeElem.toString()}
                        src={StarEmpty}
                        alt="Etoile vide"
                    />
                )
            )}
        </div>
    );
}

export default Notation;
