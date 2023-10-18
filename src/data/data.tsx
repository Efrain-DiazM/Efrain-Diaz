import {
    FaHouse,
    FaCartShopping,
    FaChartSimple,
    FaGaugeHigh,
    FaUser,
    FaLock,
    FaFile,
    FaWhatsapp,
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaXTwitter,
    FaYoutube
  } from 'react-icons/fa6';
  
  type NavItemType = {
    id: number;
    // title: string;
    icon: JSX.Element;
    to: string;
  };
  
  type NavbarType = {
    // logo: {
    //   title: string;
    // };
    nav: NavItemType[];
  };
  
  export const dataNavbar = (navItem: number): NavbarType => ({
    // logo: {
    //   title: 'HORIZON FREE',
    // },
    nav: [
      {
        id: 1,
        // title: 'Dashboard',
        icon: <FaUser className={navItem == 1 ? 'text-gray-50 w-5 h-5' : 'w-5 h-5'} />,
        to: '/',
      },
      {
        id: 2,
        // title: 'NFT Marketplace',
        icon: <FaFile className={navItem == 2 ? 'text-gray-50 w-5 h-5' : 'w-5 h-5'} />,
        to: '/Experiences',
      },
      {
        id: 3,
        // title: 'Tables',
        icon: <FaChartSimple className={navItem == 3 ? 'text-gray-50 w-5 h-5' : 'w-5 h-5'} />,
        to: '/tables',
      },
      {
        id: 4,
        // title: 'Kanban',
        icon: <FaGaugeHigh className={navItem == 4 ? 'text-gray-50 w-5 h-5' : 'w-5 h-5'} />,
        to: '/kanban',
      },
      {
        id: 5,
        // title: 'Profile',
        icon: <FaHouse className={navItem == 5 ? 'text-gray-50 w-5 h-5' : 'w-5 h-5'} />,
        to: '/profile',
      },
      {
        id: 6,
        // title: 'Sign In',
        icon: <FaWhatsapp className={navItem == 6 ? 'text-gray-50 w-5 h-5' : 'w-5 h-5'} />,
        to: '/signIn',
      },
    ],
  });
  