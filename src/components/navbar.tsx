import { NavLink } from 'react-router-dom';

import { dataNavbar } from '../data/data';
import { useNavbarStore } from '../store/navbarstore';

const Navbar = () => {
  const { navbarItemActive, selectedItemNavbar} = useNavbarStore();
//   const titleLogo = dataNavbar(navbarItemActive).logo.title.split(' ');

  return (
    <nav className='flex flex-col min-w-[90px] bg-PersonalGray-50'>
      <NavLink to='/'>
        {/* <h1 className='py-14 border-b text-center text-app-blue-dark text-[1.625rem] border-app-gray-100'> */}
          {/* <span className='font-bold'>{titleLogo[0]}</span> */}
          {/* <span className='ml-2 font-light'>{titleLogo[1]}</span> */}
        {/* </h1> */}
      </NavLink>
      <ul className='flex flex-col items-center gap-y-16 pt-10 pl-8'>
        {dataNavbar(navbarItemActive).nav.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className='flex flex-row items-center text-gray-600'
            onClick={() => {
              selectedItemNavbar(item.id);
            }}
          >
            {item.icon}
            <span className={item.id == navbarItemActive ? 'ml-3 text-base font-medium text-app-primary border-r border-app-primary' : 'ml-3 text-base font-medium text-app-gray-700'}>
              {/* {item.title} */}
            </span>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
