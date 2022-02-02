import '../../utils/Style/banner.css';

function Banner({ isHome }) {
    return (
        <div className={`banner ${isHome ? 'banner-home' : 'banner-about'}`}>
            {isHome ? <h1>Chez vous, partout et ailleurs</h1> : null}
        </div>
    );
}

export default Banner;
