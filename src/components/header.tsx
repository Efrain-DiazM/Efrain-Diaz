import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
// import { logo } from 'src/assets/images/logoED.png';

const Header = () => {
    return (
        <header className="bg-PersonalGray-100 grid grid-cols-[180px_1fr]">
            <section className="">
                <img src='src/assets/images/logoED.png' className="w-28 h-28" alt="" />
            </section>
            <ul className="flex gap-3 justify-end px-5 py-5 text-ColorLetter">
                <li><FaGithub className='w-7 h-7' /></li>
                <li><FaLinkedinIn className='w-7 h-7'/></li>
                <li><FaInstagram className='w-7 h-7'/></li>
                <li><FaFacebookF className='w-7 h-7'/></li>
                <li><FaXTwitter className='w-7 h-7'/></li>
                {/* <li><FaYoutube className='w-7 h-7 text-gray-50'/></li> */}
            </ul>
            {/* <p>Header</p> */}
        </header>
    )
}

export default Header;