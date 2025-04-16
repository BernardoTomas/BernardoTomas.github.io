import { ThemeContext } from '../../../context/toggle-theme';
import { useContext } from 'react';

import './Textcard.css';

function TextCard () {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={ theme + ' text-card-container' }>
      <h1>BERNARDO TOMAS</h1>
      <h3>Full Stack Web Developer and Designer</h3>
      <button className="hero-cta-btn">Venha ver meus projetos</button>
    </div>
  );
}

export default TextCard;