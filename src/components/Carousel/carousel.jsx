import React, { useEffect } from 'react';
import ChevronLeft from '../../assets/Chevron_gauche.svg';
import ChevronRight from '../../assets/Chevron_droit.svg';
import '../../utils/Style/carousel.css';

function Carousel({ array }) {
    const [indexArray, setIndexArray] = React.useState(0);
    const beforePicture = () => setIndexArray(indexArray - 1);
    const nextPicture = () => setIndexArray(indexArray + 1);

    useEffect(() => {
        if (indexArray < 0) setIndexArray(array?.length - 1);
        if (indexArray > array?.length - 1) setIndexArray(0);
    }, [indexArray, array?.length]);

    return (
        <div className="carousel-ctn">
            <button
                onClick={beforePicture}
                className="carousel-btn carousel-before-btn"
            >
                <img src={ChevronLeft} alt="précédent" />
            </button>
            <img
                src={array ? array[indexArray] : ''}
                alt="appartement"
                className="carousel-picture"
            />
            <button
                onClick={nextPicture}
                className="carousel-btn carousel-next-btn"
            >
                <img src={ChevronRight} alt="suivant" />
            </button>
        </div>
    );
}

export default Carousel;
