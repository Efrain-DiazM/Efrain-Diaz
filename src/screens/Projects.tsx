import { FaChevronRight, FaChevronLeft, FaMinus } from "react-icons/fa6";

const Projects = () => {
    return (
        <section className="grid grid-rows-[10px-1fr_10px]">
            <h1 className=" text-Color-yellow text-center mt-2 text-2xl font-bold">Proyectos</h1>
            <section className="row-span-2 m-2 gap-3 grid grid-cols-[20px_1fr_1fr_20px] justify-items-center items-center">
                <FaChevronLeft className='col-span-1 w-7 h-7' />
                <section className="bg-PersonalGray-100 rounded-xl">
                    <img src="src/assets/images/imagen-Efra.png" className="m-2 w-24 h-24 rounded-full" alt="" />
                    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                    <section className="px-6">
                        <section className="font-bold text-xl mb-2 text-center">Parking Soft</section>
                        <p className="text-gray-700 text-base">
                        software para control de registro y salida de vehiculos, manejo de tarifas, mensualidades.
                        </p>
                    </section>
                    <section className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </section>
                </section>
                <section className="bg-PersonalGray-100 rounded-xl">
                    <img src="src/assets/images/imagen-Efra.png" className=" w-24 h-24 rounded-full" alt="" />
                    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                    <section className="px-6">
                        <section className="font-bold text-xl mb-2">The Coldest Sunset</section>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </section>
                    <section className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </section>
                </section>
                <FaChevronRight className='col-span-1 w-7 h-7' />
            </section>
            <section className="row-span-1 flex gap-2 justify-center">
                <FaMinus />
                <FaMinus className="text-Color-yellow"/>
                <FaMinus />
            </section>
        </section>
    );
};

export default Projects;