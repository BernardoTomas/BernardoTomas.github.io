import { ThemeContext } from './context/toggle-theme';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import HomePage from './pages/Home';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={ {theme, changeTheme} }>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        {/* <Route path="/projects" element={ <ProjectsPage /> } /> */}
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App;
