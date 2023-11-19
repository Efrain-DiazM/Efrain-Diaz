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
        title: 'Multi-language app',
        career: 'Software engineer',
        aboutMe: 'I am passionate about programming in software development both in the backend and in the frontend, creating projects that not only challenge my skills, but also offer solutions to real world problems. I enjoy both solo screen time and team collaboration. Deeply valuing the diversity of perspectives, I firmly believe that each project is a opportunity to learn something new. I love taking advantage of collective knowledge to strengthen my skills and contribute meaningfully to the team. In addition to my fascination with programming, I am a sports and film enthusiast and a lover of good food. I strongly believe in maintaining a work-life balance, and I find inspiration in the variety of experiences offered each day.'
      },
    },
    es: {
      translation: {
        title: 'Aplicación en varios idiomas',
        career: 'Ingeniero de software',
        aboutMe:'Soy un apasionado de la programación en el desarrollo de software tanto en el backend como en el frontend,  la creación de proyectos que no solo desafíen mis habilidades, sino que también ofrezcan soluciones de problemas del mundo real. Disfruto tanto del tiempo en solitario frente a la pantalla como de la colaboración en equipo. Valorando profundamente la diversidad de perspectivas, creo firmemente que cada proyecto es una oportunidad para aprender algo nuevo. Me encanta aprovechar el conocimiento colectivo para fortalecer mis habilidades y contribuir de manera significativa al equipo. Además de mi fascinación por la programación, soy un entusiasta del deporte, el cine y un amante de la buena comida. Creo firmemente en mantener un equilibrio entre el trabajo y la vida, y encuentro inspiración en la variedad de experiencias que ofrece cada día.'
      },
    },
  },
});

export default i18n;
