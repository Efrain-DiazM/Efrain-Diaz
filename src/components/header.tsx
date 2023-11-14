// import { Route, Routes } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
// import Home from "./Home";
import logo from '../assets/images/logoED.png';

const Header = () => {
    return (
        <header className="bg-PersonalGray-100 grid md:grid-cols-[15%_1fr]">
            <section className="md:ml-14 md:mt-6 ml-6 mt-4">
                {/* <NavLink to='./Home'>
                    <img src={logo}  className="w-28 h-28" alt="" />
                </NavLink> */}
                <a href="/"><img src={logo}  className="md:w-28 md:h-28 w-14 h-14" alt="" /></a>
                
            </section>
            <ul className="flex gap-3 md:justify-end md:px-5 md:py-5 md:text-ColorLetter md:visible invisible">
                <a href="https://github.com/Efrain-DiazM" target="_blank" rel="noopener noreferrer"><FaGithub className='w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' /></a>
                <a href="https://www.linkedin.com/in/efrain-diazm/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'/></a>
                <a href="https://instagram.com/efrain_diaz_?utm_source=qr&igshid=dm1xOGl6Zno2c3l1" target="_blank" rel="noopener noreferrer"><FaInstagram className='w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'/></a>
                <a href="https://www.facebook.com/efrain.diaz.5095110?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer"><FaFacebookF className='w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'/></a>
                <a href="https://x.com/efraindiaz13?t=_dFp76LI8QiyySHvq924Lw&s=09" target="_blank" rel="noopener noreferrer"><FaXTwitter className='w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'/></a>
                {/* <li><FaYoutube className='w-7 h-7 text-gray-50'/></li> */}
            </ul>
            {/* <p>Header</p> */}
        </header>
    )
}

export default Header;