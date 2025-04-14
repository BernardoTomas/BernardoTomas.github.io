import NavMenu from './NavMenu/NavMenu';
import './Header.css';

function Header () {
  return (
    <header>
      <link rel='icon' href='%PUBLIC_URL%/BLT-logo.svg' />
      {/* <Logo /> */}
      <NavMenu />
    </header>
  )
}

export default Header;