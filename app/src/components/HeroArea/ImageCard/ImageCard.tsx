import { ThemeContext } from '../../../context/toggle-theme';
import { useContext } from 'react';

import './ImageCard.css';

function ImageCard () {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={ theme + ' image-card-container' }>
      <div className="image-placeholder" />
    </div>
  )
}

export default ImageCard;