import { useFetch } from '../../utils/Hook';
import { useParams } from 'react-router-dom';
import { Collapse, Carousel, Tag, Notation } from '../../components';
import '../../utils/Style/lodging.css';
import '../../utils/Style/loader.css';
import '../../utils/Style/error.css';

function Lodging() {
    const { id } = useParams();
    const { isLoading, data, error } = useFetch(
        'https://raw.githubusercontent.com/Frederic-Douville/FredericDouville_11_25012022/main/src/data/lodgings.json',
        id
    );

    if (error) {
        return (
            <div className="error-ctn">
                <span className="error-msg">Oups !! Il y a eu une erreur.</span>
            </div>
        );
    }

    return (
        <div className="lodging">
            {isLoading ? (
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            ) : (
                <div className="lodging-ctn">
                    <Carousel array={data.pictures} />
                    <div className="lodging-info-ctn">
                        <div className="lodging-title-ctn">
                            <h1>{data.title}</h1>
                            <p>
                                {data.location?.split('-')[1]},{' '}
                                {data.location?.split('-')[0]}
                            </p>
                            <div className="lodging-tag-ctn">
                                {data.tags?.map((item, index) => (
                                    <Tag content={item} key={index} />
                                ))}
                            </div>
                        </div>
                        <div className="lodging-profil-notation-ctn">
                            <div className="lodging-profil-ctn">
                                <div className="lodging-name-ctn">
                                    <p>{data.host?.name.split(' ')[0]}</p>
                                    <p>{data.host?.name.split(' ')[1]}</p>
                                </div>
                                <img
                                    src={data.host?.picture}
                                    alt="portrait de l'hôte"
                                />
                            </div>
                            <Notation rating={data.rating} />
                        </div>
                    </div>
                    <div className="lodging-collapse-ctn">
                        <Collapse
                            isLodging
                            content={data.description}
                            title="Description"
                        />
                        <Collapse isList isLodging content={data.equipments} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Lodging;
