import { ThemeContext } from '../../context/toggle-theme';
import { useContext } from 'react';
import './Header.css';

function HeaderLogo () {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="header-logo-box">
      <svg className={theme + " header-logo"} width="50" height="50" viewBox="0 0 100 100">
          <use xlinkHref="/BLT-logo.svg#svg1" />
      </svg>
    </div>
  )
}

export default HeaderLogo;