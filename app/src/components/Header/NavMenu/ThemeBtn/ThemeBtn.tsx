import { ThemeContext } from '../../../../context/toggle-theme';
import { useContext } from 'react';
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import './ThemeBtn.css'

function ThemeBtn () {
  const {theme, changeTheme} = useContext(ThemeContext);

  return (
    <button 
      onClick={() => changeTheme()}
      className={theme + " theme-btn"}
    > 
      { theme === 'dark'? <IoSunnyOutline /> : <IoMoonOutline /> }
    </button>
  )
}

export default ThemeBtn;