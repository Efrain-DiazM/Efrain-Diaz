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
import React, { useState } from 'react';

const Skills = () => {
    const { t } = useTranslation();
    const [skillHovered, setSkillHovered] = useState(null);

    const handleSkillHover = (skill) => {
        setSkillHovered(skill);
    };

    const handleSkillLeave = () => {
        setSkillHovered(null);
    };

    const skillsList = [
        { name: 'WordPress', icon: wordpress, descriocion:'mis gabilidades son' },
        { name: 'JavaScript', icon: javascript, descriocion:'mis gabilidades son' },
        { name: 'Git', icon: git, descriocion:'mis gabilidades son' },
        { name: 'Python', icon: python,descriocion:'mis gabilidades son' },
        { name: 'Mongo DB', icon: mongodb,descriocion:'mis gabilidades son' },
        { name: 'React', icon: react, descriocion:'mis gabilidades son' },
        { name: 'Django', icon: django, descriocion:'mis gabilidades son' },
        { name: 'CSS', icon: css, descriocion:'mis gabilidades son' },
        { name: 'Tailwind', icon: tailwind, descriocion:'mis gabilidades son' },
        { name: 'Figma', icon: figma, descriocion:'mis gabilidades son' },
        { name: 'HTML', icon: htmlIcon, descriocion:'mis gabilidades son' },
    ];

    return (
        <section className="text-ColorLetter px-8">
            <h1 className="text-Color-yellow text-center justify-center text-2xl font-bold">{t('skillsTitle')}</h1>
            <section className='group m-4 grid md:grid-cols-4 md:gap-4 grid-cols-2 gap-2' >
                {skillsList.map((skill) => (
                    <section
                    key={skill.name}
                    className='flex w-40 border-2 rounded-lg gap-4 border-Color-yellow p-1'
                    onMouseEnter={() => handleSkillHover(skill.name)}
                    onMouseLeave={handleSkillLeave}>
                        <img src={skill.icon} className='h-6 w-6' alt="" />
                        <span>{skill.name}</span>
                        {skillHovered === skill.name && (
                            <section className="absolute bg-PersonalGray-100 p-4 rounded-md shadow-lg">
                                <p className='text-ColorLetter'>{t('descSkill')}</p>
                            </section>
                        )}
                    </section>
                ))}
            </section>  
        </section>

    );
};

export default Skills;
