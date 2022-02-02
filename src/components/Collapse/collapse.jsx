import React from 'react';
import ChevronBas from '../../assets/Chevron_bas.svg';
import ChevronHaut from '../../assets/Chevron_haut.svg';
import '../../utils/Style/collapse.css';

function Collapse({ content, title, isList, isLodging }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleIsOpen = () => setIsOpen(!isOpen);
    return (
        <div
            className={`${
                isLodging ? 'collapse-ctn-lodging' : 'collapse-ctn'
            } `}
        >
            <div className="collapse-title-ctn">
                <span className="collapse-title">
                    {isList ? 'Équipements' : title}
                </span>
                <button onClick={handleIsOpen}>
                    {isOpen ? (
                        <img src={ChevronHaut} alt="chevron haut" />
                    ) : (
                        <img src={ChevronBas} alt="chevron bas" />
                    )}
                </button>
            </div>
            <div
                className={`collapse-content-ctn ${
                    isOpen === false ? 'hidden' : ''
                }`}
            >
                {isList ? (
                    <ul className="collapse-list">
                        {React.Children.toArray(content).map((item) => (
                            <li key={item.id}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="collapse-content">{content}</p>
                )}
            </div>
        </div>
    );
}

export default Collapse;
