import { FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";

const contactMe = () => {
    return (
        <section className="grid md:grid-cols-2">
            <section className="md:flex md:flex-col">
                <h1 className=" text-Color-yellow text-center mt-14 text-2xl font-bold">Contactame</h1>
                <p className="text-ColorLetter m-12 text-sm text-justify ">¿Tienes alguna pregunta o propuesta, o simplemente quieres saludar? Adelante contactame o enviando el siguiente formulario</p>
                <section className="bg-PersonalGray-25 rounded-xl text-ColorLetter mx-12">
                    <section className="flex gap-3 m-4 mx-8">
                        <FaEnvelope />
                        <h1>efrain@gmail.com</h1>
                    </section>
                    <section className="flex gap-3 m-4 mx-8">
                        <FaPhone />
                        <h1>+57 312 855 55 22</h1>
                    </section>
                    <section className="flex gap-3 m-4 mx-8">
                        <FaLocationDot />
                        <p>Colombia - Nariño - Pasto</p>                    
                    </section>
                </section>
            </section>


            <section className="md:w-full md:max-w-md md:mt-4">
                <form className="bg-PersonalGray-80 rounded-3xl px-8 mb-2">
                <h1 className=" text-Color-yellow text-center text-2xl font-bold">Enviar mensaje</h1>
                    <section className="mb-2 mt-2">
                        <input className=" rounded-2xl w-full py-2 px-3 bg-PersonalGray-25 focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nombre" />
                    </section>
                    <section className="mb-2">
                        <input className="rounded-2xl w-full py-2 px-3 bg-PersonalGray-25 focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                    </section>
                    <section className="mb-4">
                        <input className="h-44 rounded-2xl w-full py-2 px-3 bg-PersonalGray-25 focus:outline-none " id="username" type="text" placeholder="Escriba aqui su mensaje" />
                    </section>
                    <section className="flex items-center justify-center">
                        <button className="bg-ColorLetter  mb-4 hover:bg-Color-yellow text-PersonalGray-100 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Enviar
                        </button>
                    </section>
                </form>
            </section>
        </section>
    );
};

export default contactMe;