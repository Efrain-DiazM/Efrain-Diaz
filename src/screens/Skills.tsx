import django  from '../assets/images/django.jpg';
import figma  from '../assets/images/figma.png';
import python  from '../assets/images/python.png';
import htmlIcon  from '../assets/images/html.png';
import wordpress  from '../assets/images/wordpress.png';
import javascript  from '../assets/images/javascript.png';
import git  from '../assets/images/git.jpg';
import mongodb  from '../assets/images/mongoDB.png';
import react  from '../assets/images/react.png';
import css  from '../assets/images/css.png';
import tailwind  from '../assets/images/tailwind.svg';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();
    // Array de habilidades con lenguajes de programación y sus iconos
    const skillsList = [
        { name: 'WordPress', icon: wordpress  },
        { name: 'JavaScript', icon: javascript },
        { name: 'Git', icon: git },
        { name: 'Python', icon: python },
        { name: 'Mongo DB', icon: mongodb },
        { name: 'React', icon: react },
        { name: 'Django', icon: django },
        { name: 'CSS', icon: css },
        { name: 'Tailwind', icon: tailwind },
        { name: 'Figma', icon: figma },
        { name: 'HTML', icon: htmlIcon },
        { name: 'Tailwind', icon: tailwind },
        // Agrega más habilidades según sea necesario
    ];

    return (
        <section className="text-ColorLetter">
            <h1 className="text-Color-yellow text-center m-2 justify-center text-2xl font-bold">{t('skillsTitle')}</h1>
            <section className='m-4 flex flex-col ' >
                {skillsList.map((skill, index) => (
                    <section key={index} className='flex w-40 border-2 rounded-lg gap-4 border-Color-yellow p-1'>
                        <img src={skill.icon} className='h-6 w-6' alt="" />
                        <span>{skill.name}</span>
                    </section>
                ))}
            </section>
        </section>
    );
};

export default Skills;
