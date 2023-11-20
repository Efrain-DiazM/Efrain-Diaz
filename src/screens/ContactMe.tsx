import { FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const contactMe = () => {

    const { t } = useTranslation();

    return (
        <section className="grid md:grid-cols-2">
            <section className="md:flex md:flex-col">
                <h1 className=" text-Color-yellow text-center mt-14 text-2xl font-bold">{t('contactTitle')}</h1>
                <p className="text-ColorLetter m-12 text-sm text-justify ">{t('contacText')}</p>
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
                <h1 className=" text-Color-yellow text-center text-2xl font-bold">{t('contacMessageForm')}</h1>
                    <section className="mb-2 mt-2">
                        <input className=" rounded-2xl w-full py-2 px-3 bg-PersonalGray-25 focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={t('contacFormName')} />
                    </section>
                    <section className="mb-2">
                        <input className="rounded-2xl w-full py-2 px-3 bg-PersonalGray-25 focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={t('contacFormEmail')} />
                    </section>
                    <section className="mb-4">
                        <input className="h-44 rounded-2xl w-full py-2 px-3 bg-PersonalGray-25 focus:outline-none " id="username" type="text" placeholder={t('contacFormMessage')} />
                    </section>
                    <section className="flex items-center justify-center">
                        <button className="bg-ColorLetter  mb-4 hover:bg-Color-yellow text-PersonalGray-100 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            {t('contacButton')}
                        </button>
                    </section>
                </form>
            </section>
        </section>
    );
};

export default contactMe;