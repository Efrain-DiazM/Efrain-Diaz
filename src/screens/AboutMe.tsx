const AboutMe = () => {
    return (
        <section className="grid grid-rows">
            <section className="grid grid-cols-[70px_1fr] px-8 pt-8 pb-4">
                <img src="src/assets/images/imagen-Efra.png" className="w-16 h-16 rounded-full" alt="" />
                <section className="text-ColorLetter font-roboto">
                    <h1 className="text-2xl font-bold">Efrain Diaz</h1>
                    <p >Ingeniero de software </p>
                </section>
                
            </section>
            <section className="text-ColorLetter text-justify font-roboto px-20 py-5">
                <p>Soy un apasionado de la programación en el desarrollo de software tanto en el backend como en el
                    frontend,  la creación de proyectos que no solo desafíen mis habilidades, sino que también ofrezcan 
                    soluciones de problemas del mundo real.</p>

                <p className="py-2">Disfruto tanto del tiempo en solitario frente a la pantalla como de la colaboración en equipo. 
                    Valorando profundamente la diversidad de perspectivas, creo firmemente que cada proyecto es una 
                    oportunidad para aprender algo nuevo. Me encanta aprovechar el conocimiento colectivo para fortalecer 
                    mis habilidades y contribuir de manera significativa al equipo.</p>
                
                <p>Además de mi fascinación por la programación, soy un entusiasta del deporte, el cine y un amante 
                    de la buena comida. Creo firmemente en mantener un equilibrio entre el trabajo y la vida, y encuentro 
                    inspiración en la variedad de experiencias que ofrece cada día.</p>
                
                </section>
        </section>
    );
};

export default AboutMe;