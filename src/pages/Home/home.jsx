import { Card, Banner } from '../../components';
import { useFetch } from '../../utils/Hook';
import '../../utils/Style/home.css';
import '../../utils/Style/loader.css';
import '../../utils/Style/error.css';

function Home() {
    const { isLoading, data, error } = useFetch(
        'https://raw.githubusercontent.com/Frederic-Douville/FredericDouville_11_25012022/main/src/data/lodgings.json'
    );

    if (error) {
        return (
            <div className="error-ctn">
                <span className="error-msg">Oups !! Il y a eu une erreur.</span>
            </div>
        );
    }

    return (
        <div className="home-ctn">
            <Banner isHome />
            {isLoading ? (
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            ) : (
                <div className="home-card-ctn">
                    {data?.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            id={item.id}
                            cover={item.cover}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
