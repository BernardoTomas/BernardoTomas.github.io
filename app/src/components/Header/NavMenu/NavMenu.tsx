import { ThemeContext } from '../../../context/toggle-theme';
import { useContext } from 'react';

import ThemeBtn from "./ThemeBtn/ThemeBtn";
import NavMenuLink from "./NavMenuLink";
import './NavMenu.css';

function NavMenu () {
  const {theme} = useContext(ThemeContext);
  
  return (
    <>
      <div className="nav-menu-box">
        <ul className="nav-menu">
          <NavMenuLink info={ { anchor:"#home", name:"Home" } } />
          <div className={theme + ' nav-menu-separator'} />
          <NavMenuLink info={ { anchor:"#projects", name:"My Projects" } } />
          <div className={theme + ' nav-menu-separator'} />
          <NavMenuLink info={ { anchor:"#contact", name:"Contact" } } />
        </ul>
        <div className={theme + ' nav-menu-separator'} />
        <ThemeBtn />
      </div>
    </>
  )
}

export default NavMenu;