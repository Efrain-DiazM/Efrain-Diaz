import { FaChevronRight, FaChevronLeft, FaMinus, FaGithub, FaGlobe } from "react-icons/fa6";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import projPortafolio from '../assets/images/ProjPortafolio.png';
import parkinOne from '../assets/images/parking1.jpg';
import celeste from '../assets/images/celeste.jpg';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const { t } = useTranslation();

  const projectsData = [
    {
      title: t('firstTitleProj'),
      description: t('firstDescProj'),
      githubLink: 'https://github.com/Efrain-DiazM',
      demoLink: "https://tu-demo.com",
      imageSrc: parkinOne,
    },
    {
      title: t('secondTitleProj'),
      description: t('secondDescProj'),
      githubLink: 'https://github.com/Efrain-DiazM/Efrain-Diaz',
      demoLink: "https://tu-demo.com",
      imageSrc: projPortafolio,
    },
    {
      title: t('thirdTitleProj'),
      description: t('thirdDescProj'),
      githubLink: "https://github.com/Efrain-DiazM",
      demoLink: "https://tu-demo.com",
      imageSrc: celeste,
      },
  ];

  const nextProject = () => {
    setCurrentProject((prevProject) => (prevProject + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentProject((prevProject) => (prevProject - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <section className="grid grid-rows-[10px-1fr_15px]">
        <h1 className="text-Color-yellow text-center mt-2 text-2xl font-bold">{t('projectTitle')}</h1>
        <section className="row-span-2 m-2 gap-3 grid md:grid-cols-[20px_1fr_20px] justify-items-center items-center">
            <FaChevronLeft
            className={`md:col-span-1 text-ColorLetter md:w-7 md:h-7 ${currentProject === 0 ? 'invisible' : 'md:visible'}`}
            onClick={prevProject}
            />
            <section className="bg-PersonalGray-80 rounded-xl flex md:flex-row flex-col">
                <img src={projectsData[currentProject].imageSrc} className="px-3 w-72 h-72 rounded-2xl self-center mx-auto" alt="" />
                <section className="md:px-6 px-0 flex flex-col h-auto m-auto mx-6">
                    <section className="font-bold m-4 text-justify">
                        <h1 className="text-Color-yellow text-center mb-3 text-2xl">{projectsData[currentProject].title}</h1>
                        <p className="text-ColorLetter text-base">{projectsData[currentProject].description}</p>
                    </section>
                    
                    
                    <section className="flex flex-col gap-3 mx-auto py-8">
                      <Link to={projectsData[currentProject].githubLink}>
                        <button
                        className="items-center gap-2 justify-center flex flex-row bg-ColorLetter hover:bg-Color-yellow text-PersonalGray-100 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        >
                        <FaGithub className='w-6 h-6' />
                        {t('repository')}
                        </button>
                      </Link>  
                        <button
                        className="items-center gap-2 justify-center flex flex-row bg-ColorLetter hover:bg-Color-yellow text-PersonalGray-100 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        >
                        <FaGlobe className="w-5 h-5" />
                        {t('Demo')}
                        </button>
                    </section>
                </section>
            </section>
            <FaChevronRight
            className={`md:col-span-1 text-ColorLetter md:w-7 md:h-7 ${currentProject === projectsData.length - 1 ? 'invisible' : 'visible'}`}
            onClick={nextProject}
            />
            </section>
            <section className="row-span-1 flex gap-2 justify-center">
                <FaMinus />
                <FaMinus className="text-Color-yellow" />
                <FaMinus />
            </section>
    </section>
  );
};

export default Projects;
