import NavMenu from './NavMenu/NavMenu';
import './Header.css';
import HeaderLogo from './HeaderLogo';

function Header () {
  return (
    <header>
      <HeaderLogo />
      <NavMenu />
    </header>
  )
}

export default Header;