import React from 'react';
import ChevronDown from '../../assets/Chevron_bas.svg';
import ChevronUp from '../../assets/Chevron_haut.svg';
import '../../utils/Style/collapse.css';

function Collapse({ content, title, isList, isLodging }) {
    const [isOpen, setIsOpen] = React.useState(true);
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
                    <img
                        src={isOpen ? ChevronUp : ChevronDown}
                        alt={isOpen ? 'chevron haut' : 'chevron bas'}
                    />
                </button>
            </div>
            <div
                className={`collapse-content-ctn ${
                    isOpen === false ? 'hidden' : ''
                }`}
            >
                {isList ? (
                    <ul className="collapse-list">
                        {content?.map((item, index) => (
                            <li key={index}>{item}</li>
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
