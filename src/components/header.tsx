import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Header = () => {
    return (
        <header className="bg-PersonalGray-50 grid grid-cols-[150px_1fr]">
            <section className="bg-red-300">

            </section>
            <ul className="flex gap-3 justify-end px-5 py-5">
                <li><FaGithub className='w-7 h-7 text-yellow-500' /></li>
                <li><FaLinkedinIn className='w-7 h-7 text-yellow-500'/></li>
                <li><FaInstagram className='w-7 h-7 text-yellow-500'/></li>
                <li><FaFacebookF className='w-7 h-7 text-yellow-500'/></li>
                <li><FaXTwitter className='w-7 h-7 text-yellow-500'/></li>
                <li><FaYoutube className='w-7 h-7 text-yellow-500'/></li>
            </ul>
            {/* <p>Header</p> */}
        </header>
    )
}

export default Header;