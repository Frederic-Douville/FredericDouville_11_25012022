import React, { useEffect, useState } from 'react';
import { Card, Banner } from '../../components';
import '../../utils/Style/home.css';
import '../../data/lodgings.json';

const cardArray = [
    'Titre de la location #1',
    'Titre de la location #2',
    'Titre de la location #3',
    'Titre de la location #4',
    'Titre de la location #5',
    'Titre de la location #6',
];

function Home() {
    const [lodgingData, setLodgingData] = React.useState([]);

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/Frederic-Douville/FredericDouville_11_25012022/main/src/data/logements.json'
        ).then((response) =>
            response
                .json()
                .then((data) => setLodgingData(data))
                .catch((error) => console.log(error))
        );
    }, []);

    console.log(lodgingData);
    return (
        <div className="home-ctn">
            <Banner isHome />
            <div className="home-card-ctn">
                {lodgingData.map((item) => (
                    <Card key={item.id} title={item.title} id={item.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;
