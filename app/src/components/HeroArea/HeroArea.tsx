import { useContext } from "react";
import { ThemeContext } from "../../context/toggle-theme";
import ImageCard from "./ImageCard/ImageCard";
import TextCard from "./TextCard/TextCard";
import HeroOverlay from "./HeroOverlay/HeroOverlay";
import "./HeroArea.css";

function HeroArea() {
  const { theme } = useContext(ThemeContext);

  const smokeAnimationDelayClasses = [
    "smoke-animation",
    "smoke-animation-offset-2s",
    "smoke-animation-offset-4s",
    "smoke-animation-offset-6s",
  ];

  return (
    <div className={theme + " hero-container"}>
      <div className="hero-content">
        <ImageCard />
        <TextCard />
      </div>
      <div className="hero-overlay">
        {smokeAnimationDelayClasses.map((animClass) => (
          <HeroOverlay smokeAnimation={animClass} />
        ))}
      </div>
    </div>
  );
}

export default HeroArea;
