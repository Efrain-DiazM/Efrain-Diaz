import personalImage from '../assets/images/imagen-Efra.png';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {

    const { t } = useTranslation();

    return (
        <section className="grid grid-rows">
            <section className="grid grid-cols-[70px_1fr] px-8 pt-8 pb-4">
                <img src={ personalImage } className="w-16 h-16 rounded-full" alt="Efrain-Diaz" />
                <section className="text-ColorLetter font-roboto">
                    <h1 className="text-2xl font-bold">Efrain Diaz</h1>
                    <p >{t('career')} </p>
                </section>
                
            </section>
            <section className="text-ColorLetter text-justify font-roboto md:px-20 pl-4 pr-4 py-5 md:hidde:overflow-y-scroll">
                <p>{t('aboutMe')}</p>
                
                </section>
        </section>
    );
};

export default AboutMe;