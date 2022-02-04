import React from 'react';
import ChevronLeft from '../../assets/Chevron_gauche.svg';
import ChevronRight from '../../assets/Chevron_droit.svg';
import '../../utils/Style/carousel.css';

function Carousel(array) {
    const pictureArray = array.array;
    const pictureArrayLength = pictureArray?.length;
    const [indexArray, setIndexArray] = React.useState(0);
    const beforePicture = () => setIndexArray(indexArray - 1);
    const nextPicture = () => setIndexArray(indexArray + 1);
    if (indexArray < 0) {
        setIndexArray(pictureArrayLength - 1);
    }
    if (indexArray > pictureArrayLength - 1) {
        setIndexArray(0);
    }

    return (
        <div className="carousel-ctn">
            <button
                onClick={beforePicture}
                className="carousel-btn carousel-before-btn"
            >
                <img src={ChevronLeft} alt="précédent" />
            </button>
            <img
                src={pictureArray ? pictureArray[indexArray] : ''}
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
