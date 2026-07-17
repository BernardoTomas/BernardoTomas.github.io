import { ThemeContext } from '../../context/toggle-theme';
import { useContext } from 'react';
import NavMenu from './NavMenu/NavMenu';
import './Header.css';
import HeaderLogo from './HeaderLogo';

function Header () {
  const {theme} = useContext(ThemeContext);

  return (
    <header className={ theme }>
      <HeaderLogo />
      <NavMenu />
    </header>
  )
}

export default Header;