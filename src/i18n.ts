import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        aboutMeTitle: 'About me',
        ExperienciesTitle:'Experiences',
        skillsTitle:'Skills',
        projectTitle:'Projects',
        contactTitle:'Contact me',

        career: 'Software engineer',
        aboutMe: 'I am passionate about programming in software development both in the backend and in the frontend, creating projects that not only challenge my skills, but also offer solutions to real world problems. I enjoy both solo screen time and team collaboration. Deeply valuing the diversity of perspectives, I firmly believe that each project is a opportunity to learn something new. I love taking advantage of collective knowledge to strengthen my skills and contribute meaningfully to the team. In addition to my fascination with programming, I am a sports and film enthusiast and a lover of good food. I strongly believe in maintaining a work-life balance, and I find inspiration in the variety of experiences offered each day.',
        
        firstExpAca:'Computer technologist',
        firstExpUni:'firstExpUni',
        secondExpAca: 'Certified in ITIL V4',
        thirdExpAca:'SCRUM Fundamentals Certificate',
        quarterExpACa:'Master in Python: Learn Python 3, Django, Flask and Tkinter',
        firstExpWork:'Managed team analyst',
        expTitleAca:'ACADEMIC',
        expTitleWork:'WORK',

        // projectTitle:'Projects',
        repository:'Repository',
        demo:'Demo',
        firstTitleProj:'Parking Soft',
        firstDescProj:'Software to control vehicle registration and departure, management of rates, monthly payments.',
        secondTitleProj:'Portfolio',
        secondDescProj:'Digital portfolio is a compilation of your best work: the projects that exemplify your qualities, training and experience. Through an online portfolio, you can attract the attention of job recruiters, obtain new job opportunities',
        thirdTitleProj:'Celeste store',
        thirdDescProj:'Website for sale of women clothing',

        // contacTitle:'Contact me',
        contacText:'Do you have any questions or suggestions, or just want to say hello? Go ahead and contact me or by sending the following form',
        contacMessageForm:'Send Message',
        contacFormName:'Name',
        contacFormEmail:'Email',
        contacFormMessage:'Write your message here',
        contacButton:'Send',

        descSkill:'With this tool I have developed',

        homeTitle:'Hello, I\'m Efrain Diaz',
        homeDesc:'SOFTWARE ENGINEER, BACK END AND FRONT END',
        homeAboutMe:'Learn more about me',

      },
    },
    es: {
      translation: {

        aboutMeTitle: 'Sobre mi',
        ExperienciesTitle:'Experiencia',
        skillsTitle:'Habilidades',
        projectTitle:'Proyectos',
        contactTitle:'Contactame',

        career: 'Ingeniero de software',
        aboutMe:'Soy un apasionado de la programación en el desarrollo de software tanto en el backend como en el frontend,  la creación de proyectos que no solo desafíen mis habilidades, sino que también ofrezcan soluciones de problemas del mundo real. Disfruto tanto del tiempo en solitario frente a la pantalla como de la colaboración en equipo. Valorando profundamente la diversidad de perspectivas, creo firmemente que cada proyecto es una oportunidad para aprender algo nuevo. Me encanta aprovechar el conocimiento colectivo para fortalecer mis habilidades y contribuir de manera significativa al equipo. Además de mi fascinación por la programación, soy un entusiasta del deporte, el cine y un amante de la buena comida. Creo firmemente en mantener un equilibrio entre el trabajo y la vida, y encuentro inspiración en la variedad de experiencias que ofrece cada día.',
        
        firstExpAca:'Tecnologo en computacion',
        firstExpUni:'Universidad de Nariño',
        secondExpAca: 'Certificado en ITIL V4',
        thirdExpAca:'Certificado fundamentals SCRUM',
        quarterExpACa:'Master en Python: Aprender Python 3, Django, Flask y Tkinter',
        firstExpWork:'Analista equipo gestionado',
        expTitleAca:'ACADEMICA',
        expTitleWork:'LABORALES',

        // projectTitle:'Proyectos',
        repository:'Repositorio',
        demo:'Demo',
        firstTitleProj:'Parking Soft',
        firstDescProj:'Software para control de registro y salida de vehículos, manejo de tarifas, mensualidades.',
        secondTitleProj:'Portafolio',
        secondDescProj:'Portafolio digital es una compilación de tu mejor trabajo: los proyectos que ejemplifican tus cualidades, capacitación y experiencia. Por medio de un portafolio en línea, puedes llamar la atención de reclutadores de trabajo, obtener nuevas oportunidades laborales',
        thirdTitleProj:'Tienda celeste',
        thirdDescProj:'Pagina web para venta de ropa para mujer',

        // contacTitle:'Contactame',
        contacText:'¿Tienes alguna pregunta o propuesta, o simplemente quieres saludar? Adelante contactame o enviando el siguiente formulario',
        contacMessageForm:'Enviar mensaje',
        contacFormName:'Nombre',
        contacFormEmail:'Email',
        contacFormMessage:'Escriba aqui su mensaje',
        contacButton:'Enviar',

        descSkill:'Con esta herramienta he desarrollado',

        homeTitle:'Hola, soy Efrain Diaz',
        homeDesc:'INGENIERO DE SOFTWARE, BACK END Y FRONT END',
        homeAboutMe:'Conozca mas sobre mi',

      },
    },
  },
});

export default i18n;
