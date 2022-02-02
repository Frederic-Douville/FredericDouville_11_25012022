import { Banner, Collapse } from '../../components';
import '../../utils/Style/about.css';

const reliability = {
    title: 'Fiabilité',
    description:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
};

const respect = {
    title: 'Respect',
    description:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
};

const service = {
    title: 'Service',
    description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
};

const responsibility = {
    title: 'Responsabilité',
    description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
};

function About() {
    return (
        <div className="about-ctn">
            <Banner />
            <div className="collapse-about-ctn">
                <Collapse
                    title={reliability.title}
                    content={reliability.description}
                />
                <Collapse title={respect.title} content={respect.description} />
                <Collapse title={service.title} content={service.description} />
                <Collapse
                    title={responsibility.title}
                    content={responsibility.description}
                />
            </div>
        </div>
    );
}

export default About;
