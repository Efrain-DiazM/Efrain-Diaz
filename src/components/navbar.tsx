import { NavLink } from 'react-router-dom';

import { dataNavbar } from '../data/data';
import { useNavbarStore } from '../store/navbarstore';
  import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { navbarItemActive, selectedItemNavbar} = useNavbarStore();
  const { t } = useTranslation();
//   const titleLogo = dataNavbar(navbarItemActive).logo.title.split(' ');

  return (
    <nav className={`flex flex-col min-w-[90px] bg-PersonalGray-100 fixed pb-3 bottom-0 md:static md:block`}>
      <ul className="flex md:flex-col flex-row items-center md:gap-y-20 gap-x-14 mx-10 pt-3 md:pb-2">
        {dataNavbar(navbarItemActive).nav.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className={`flex flex-row items-center text-PersonalGray-50`}
            onClick={() => {
              selectedItemNavbar(item.id);
            }}
          >
            <span className={item.id === navbarItemActive ? 'md:mr-3 md:text-xl hidden md:block md:font-extrabold md:text-Color-yellow md:border-Color-yellow' : 'md:mr-3 md:text-ColorLetter hidden md:block '}>
            {t(item.title)}
            </span>
            {item.icon}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
