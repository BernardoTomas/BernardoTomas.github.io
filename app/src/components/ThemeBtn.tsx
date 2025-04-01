import { ThemeContext } from '../context/toggle-theme'; 
import { useContext } from 'react';
import './ThemeBtn.css'

function ThemeBtn () {
  const themeContext = useContext(ThemeContext)

  return (
    <button 
      onClick={() => themeContext.changeTheme()}
      className={themeContext.theme}
    > 
      { themeContext.theme === 'dark'? 'light' : 'dark' }
    </button>
  )
}

export default ThemeBtn;