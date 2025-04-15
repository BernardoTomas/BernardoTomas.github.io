import { useContext } from "react";
import { ThemeContext } from "../../context/toggle-theme";
import ImageCard from "./ImageCard/ImageCard";
import TextCard from "./TextCard/TextCard";
import './HeroArea.css';

function HeroArea () {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={ theme + ' hero-container'}>
      <ImageCard />
      <TextCard />
    </div>
  )

};

export default HeroArea;