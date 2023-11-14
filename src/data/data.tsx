import {
    FaMessage,
    FaStarHalfStroke,
    FaFolderTree,
    FaUser,
    FaGraduationCap,
    // FaWhatsapp,
  } from 'react-icons/fa6';
  
  type NavItemType = {
    id: number;
    title: string;
    icon: JSX.Element;
    to: string;
  };
  
  type NavbarType = {
    nav: NavItemType[];
  };
  
  export const dataNavbar = (navItem: number): NavbarType => ({
    nav: [
      {
        id: 1,
        title: 'Sobre mi', 
        icon: <FaUser className={navItem == 1 ? 'text-Color-yellow md:w-8 md:h-8 md:mr-8' : 'w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'} />,
        to: '/AboutMe',
      },
      {
        id: 2,
        title: 'Experiencias',
        icon: <FaGraduationCap className={navItem == 2 ? 'text-Color-yellow md:w-8 md:h-8 md:mr-8' : 'w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'} />,
        to: '/Experiences',
      },
      {
        id: 3,
        title: 'Habilidades',
        icon: <FaStarHalfStroke className={navItem == 3 ? 'text-Color-yellow md:w-8 md:h-8 md:mr-8' : 'w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'} />,
        to: '/Skills',
      },
      {
        id: 4,
        title: 'Proyectos',
        icon: <FaFolderTree className={navItem == 4 ? 'text-Color-yellow md:w-8 md:h-8 md:mr-8' : 'w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'} />,
        to: '/Projects',
      },
      {
        id: 5,
        title: 'Contactame',
        icon: <FaMessage className={navItem == 5 ? 'text-Color-yellow md:w-8 md:h-8 md:mr-8' : 'w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'} />,
        to: '/ContactMe',
      },
      // {
      //   id: 6,
      //   title: 'Sign In',
      //   icon: <FaWhatsapp className={navItem == 6 ? 'text-Color-yellow w-5 h-5' : 'w-5 h-5'} />,
      //   to: '/signIn',
      // },
    ],
  });
  