import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Collapse, Carousel, Tag, Notation } from '../../components';
import '../../utils/Style/lodging.css';

function Lodging() {
    const { id } = useParams();
    const [oneLodgingData, setOneLodgingData] = React.useState([]);

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/Frederic-Douville/FredericDouville_11_25012022/main/src/data/lodgings.json'
        ).then((response) =>
            response
                .json()
                .then((data) =>
                    data.map((item) =>
                        item.id === id ? setOneLodgingData(item) : null
                    )
                )
                .catch((error) => console.log(error))
        );
    }, []);

    const location = oneLodgingData.location;
    const region = location?.split('-')[0];
    const city = location?.split('-')[1];

    const tagArray = oneLodgingData.tags;

    const host = oneLodgingData.host;
    const firstName = host?.name.split(' ')[0];
    const lastName = host?.name.split(' ')[1];
    const hostPicture = host?.picture;

    const rating = oneLodgingData.rating;

    return (
        <div className="lodging-ctn">
            <div>{/* <Carousel /> */}</div>
            <div className="lodging-info-ctn">
                <div className="lodging-title-ctn">
                    <h1>{oneLodgingData.title}</h1>
                    <p>
                        {city}, {region}
                    </p>
                    <div className="lodging-tag-ctn">
                        {React.Children.toArray(tagArray)?.map((item) => (
                            <Tag content={item} key={item.id} />
                        ))}
                    </div>
                </div>
                <div className="lodging-profil-notation-ctn">
                    <div className="lodging-profil-ctn">
                        <div className="lodging-name-ctn">
                            <p>{firstName}</p>
                            <p>{lastName}</p>
                        </div>
                        <img src={hostPicture} alt="portrait de l'hôte" />
                    </div>
                    <Notation starTotal={rating} />
                </div>
            </div>
            <div className="lodging-collapse-ctn">
                <Collapse
                    isLodging
                    content={oneLodgingData.description}
                    title="Description"
                />
                <Collapse
                    isList
                    isLodging
                    content={oneLodgingData.equipments}
                />
            </div>
        </div>
    );
}

export default Lodging;
