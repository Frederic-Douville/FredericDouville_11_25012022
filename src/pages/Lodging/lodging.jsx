import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Collapse } from '../../components';
import '../../utils/Style/lodging.css';

function Lodging() {
    const { id } = useParams();
    const [oneLodgingData, setOneLodgingData] = React.useState([]);

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/Frederic-Douville/FredericDouville_11_25012022/main/src/data/logements.json'
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
    //split n'est pas accepté par react
    //const region = location.split('-')[0];
    //const city = location.split('-')[1];
    const host = oneLodgingData.host;

    return (
        <div className="lodging-ctn">
            <div>
                <p>Futur carroussel de photos</p>
            </div>
            <div>
                <div>
                    <h1>{oneLodgingData.title}</h1>
                    <p>{oneLodgingData.location}</p>
                    <div></div>
                </div>
                <div>
                    <p>Notation</p>
                    <p>nom</p>
                    <p>image</p>
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
