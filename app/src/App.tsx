import { ThemeContext } from './context/toggle-theme';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';

function App() {
  return (
    <ThemeContext.Provider value={ {theme: 'dark'} }>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        {/* <Route path="/projects" element={ <ProjectsPage /> } /> */}
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App
