import { useContext } from "react";
import { ThemeContext } from "../../context/toggle-theme";
import ImageCard from "./ImageCard/ImageCard";
import TextCard from "./TextCard/TextCard";
import smokeOverlayBottom from "../../assets/smoke_overlay_bottom.png";
import "./HeroArea.css";

function HeroArea() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme + " hero-container"}>
      <div className="hero-content">
        <ImageCard />
        <TextCard />
      </div>
      <div className="hero-overlay">
        <div className="smoke-container-purple">
          <img
            className="smoke1"
            src={smokeOverlayBottom}
            alt="smoke effect overlay"
          />
          <div className="smoke-container-yellow">
            <img
              className="smoke2"
              src={smokeOverlayBottom}
              alt="smoke effect overlay"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroArea;
