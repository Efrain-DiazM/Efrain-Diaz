import { FaArrowRightToBracket } from "react-icons/fa6";
import personalImage from '../assets/images/imagen-Efra.png';
// import App from "../screens/App";
// import { Route, Routes } from "react-router-dom";

const Home = () => {
    return (
        <section className="bg-PersonalGray-100 grid grid-cols-[65%_35%]">
            <section className="m-3 mx-10">
                <h1 className="text-Color-yellow text-8xl font-extrabold">
                    Hola, soy Efrain Diaz
                </h1>
                <p className="text-ColorLetter font-bold text-xl mr-44">
                    INGENIERO DE SOFTWARE, BACK END Y FRONT END
                </p>
                <section className="flex text-PersonalGray-50 gap-6 items-center m-3">
                {/* <Routes> */}
                    {/* <Route path='/' element={<App />} /> */}
                    {/* <Route path='*' element={<NotFound />} /> */}
                {/* </Routes> */}
                    <a href="/AboutMe"><FaArrowRightToBracket className="w-14 h-14" /></a>
                    <h4 className="text-2xl font-extrabold">
                        Conozca mas sobre mi
                    </h4>
                </section>
            </section>
            <section>
            <img src={ personalImage } className="w-72 h-80 rounded-full shadow-lg shadow-PersonalGray-80" alt="Efrain-Diaz" />
            </section>
        </section>
    );
};

export default Home;