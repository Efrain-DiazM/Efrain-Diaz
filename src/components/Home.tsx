import { FaArrowRightToBracket } from "react-icons/fa6";
import personalImage from '../assets/images/imagen-Efra.png';
import { useTranslation } from "react-i18next";
// import App from "../screens/App";
// import { Route, Routes } from "react-router-dom";

const Home = () => {

    const { t } = useTranslation();

    return (
        <section className="bg-PersonalGray-100 grid md:grid-cols-[65%_35%] h-full w-full">
            <section className="m-3 mx-10 md:order-1 order-2 md:text-left text-center">
                <h1 className="text-Color-yellow md:text-8xl text-6xl font-extrabold">
                    {t('homeTitle')}
                </h1>
                <p className="text-ColorLetter font-bold text-xl md:mr-44 mx-10 md:mx-0">
                    {t('homeDesc')}
                </p>
                <section className="flex text-PersonalGray-50 gap-6 items-center md:mx-3 mt-9 m-4">
                    <a href="/AboutMe"><FaArrowRightToBracket className="w-14 h-14 animate-bounce" /></a>
                    <h4 className="text-2xl font-extrabold">
                        {t('homeAboutMe')}
                    </h4>
                </section>
            </section>
            <section className="md:order-1 justify-self-center">
            <img src={ personalImage } className="w-72 h-80 rounded-full contrast-100 shadow-lg shadow-PersonalGray-80" alt="Efrain-Diaz" />
            </section>
        </section>
    );
};

export default Home;