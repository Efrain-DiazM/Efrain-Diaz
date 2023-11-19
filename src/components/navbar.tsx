import { NavLink } from 'react-router-dom';

import { dataNavbar } from '../data/data';
import { useNavbarStore } from '../store/navbarstore';

const Navbar = () => {
  const { navbarItemActive, selectedItemNavbar} = useNavbarStore();
//   const titleLogo = dataNavbar(navbarItemActive).logo.title.split(' ');

  return (
    <nav className='flex flex-col min-w-[90px] bg-PersonalGray-100'>
      <NavLink to='/'>
        {/* <h1 className='py-14 border-b text-center text-app-blue-dark text-[1.625rem] border-app-gray-100'> */}
          {/* <span className='font-bold'>{titleLogo[0]}</span> */}
          {/* <span className='ml-2 font-light'>{titleLogo[1]}</span> */}
        {/* </h1> */}
      </NavLink>
      <ul className='flex md:flex-col flex-row items-center md:gap-y-20 gap-x-14 mx-10 pt-3 md:pb-2'>
        {dataNavbar(navbarItemActive).nav.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className='flex flex-row items-center text-PersonalGray-50'
            onClick={() => {
              selectedItemNavbar(item.id);
            }}
          >
            <span className={item.id == navbarItemActive ? 'md:mr-4 md:text-xl md:visible hidden md:font-extrabold md:text-Color-yellow md:border-Color-yellow' : 'md:mr-3 md:text-PersonalGray-100 md:visible hidden'}>
              {item.title}
            </span>
            {item.icon}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
