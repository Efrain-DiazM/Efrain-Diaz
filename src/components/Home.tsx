import { FaArrowRightToBracket } from "react-icons/fa6";
import personalImage from '../assets/images/imagen-Efra.png';
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Home = () => {

    const { t } = useTranslation();

    return (
        <section className="bg-PersonalGray-100 grid md:grid-cols-[65%_35%] h-auto w-full">
            <section className="m-3 mx-10 md:order-1 order-2 md:text-left text-center">
                <h1 className="text-Color-yellow md:text-8xl text-6xl font-extrabold">
                    {t('homeTitle')}
                </h1>
                <p className="text-ColorLetter font-bold text-xl md:mr-44 mx-10 md:mx-0">
                    {t('homeDesc')}
                </p>
                <section className="flex text-PersonalGray-50 gap-6 items-center md:mx-3 mt-9 m-4">
                    <NavLink to='./AboutMe'>
                        <FaArrowRightToBracket className="w-14 h-14 animate-bounce" />
                    </NavLink>
                    <h4 className="text-2xl font-extrabold">
                        {t('homeAboutMe')}
                    </h4>
                </section>
                <ul className="flex gap-3 justify-center py-5 text-ColorLetter block md:hidden">
                    <a href="https://github.com/Efrain-DiazM" target="_blank" rel="noopener noreferrer"><FaGithub className='w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' /></a>
                    <a href="https://www.linkedin.com/in/efrain-diazm/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'/></a>
                    <a href="https://instagram.com/efrain_diaz_?utm_source=qr&igshid=dm1xOGl6Zno2c3l1" target="_blank" rel="noopener noreferrer"><FaInstagram className='w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'/></a>
                    <a href="https://www.facebook.com/efrain.diaz.5095110?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer"><FaFacebookF className='w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'/></a>
                    <a href="https://x.com/efraindiaz13?t=_dFp76LI8QiyySHvq924Lw&s=09" target="_blank" rel="noopener noreferrer"><FaXTwitter className='w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'/></a>
                </ul>
            </section>
            <section className="md:order-1 justify-self-center">
            <img src={ personalImage } className="w-72 h-80 rounded-full contrast-100 shadow-lg shadow-PersonalGray-80" alt="Efrain-Diaz" />
            </section>            
        </section>
    );
};

export default Home;