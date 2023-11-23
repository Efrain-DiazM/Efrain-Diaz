// import { Route, Routes } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
// import Home from "./Home";
import logo from '../assets/images/logoED.png';
import { useTranslation } from 'react-i18next';
import { languageData } from '../data/data'; 

const Header = () => {

    const { i18n } = useTranslation();
    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
      };

    return (
        <header className="bg-PersonalGray-100 md:grid md:grid-cols-[15%_1fr_auto] flex">
            <section className="md:ml-14 md:mt-6 ml-6 mt-4">
                <a href="/"><img src={logo}  className="md:w-28 md:h-28 w-14 h-14" alt="" /></a>
                
            </section>
            <section className="md:self-start self-end m-4 justify-self-end bg-PersonalGray-100">
                <select
                    defaultValue={i18n.language}
                    onChange={onChangeLang}
                    className='block px-4 py-2 text-gray-700 bg-Color-yellow rounded-full focus:outline-none focus:ring-primary-500 focus:border-primary-500'
                >
                    {languageData().map(({ code, label }) => (
                    <option key={code} value={code}>
                        {label}
                    </option>
                    ))}
                </select>
            </section>
            <ul className="flex gap-3 md:justify-end md:px-5 md:py-5 md:text-ColorLetter md:visible invisible">
                <a href="https://github.com/Efrain-DiazM" target="_blank" rel="noopener noreferrer"><FaGithub className='w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' /></a>
                <a href="https://www.linkedin.com/in/efrain-diazm/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'/></a>
                <a href="https://instagram.com/efrain_diaz_?utm_source=qr&igshid=dm1xOGl6Zno2c3l1" target="_blank" rel="noopener noreferrer"><FaInstagram className='w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'/></a>
                <a href="https://www.facebook.com/efrain.diaz.5095110?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer"><FaFacebookF className='w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'/></a>
                <a href="https://x.com/efraindiaz13?t=_dFp76LI8QiyySHvq924Lw&s=09" target="_blank" rel="noopener noreferrer"><FaXTwitter className='w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'/></a>
            </ul>
        </header>
    )
}

export default Header;