import { useContext } from "react";
import { ThemeContext } from "../../context/toggle-theme";
import HeroImageCard from "./HeroImageCard/HeroImageCard";
import HeroTextCard from "./HeroTextCard/HeroTextCard";

import "./HeroArea.css";
// import HeroOverlay from "./HeroOverlay/HeroOverlay";

function HeroArea() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="home" className={theme + " hero-container"}>
      <div className="hero-content">
        <HeroImageCard />
        <HeroTextCard />
      </div>
      {/* <div className="hero-overlay">
        <HeroOverlay smokeAnimation="smoke-animation" />
        <HeroOverlay smokeAnimation="smoke-animation-offset-2s" />
        <HeroOverlay smokeAnimation="smoke-animation-offset-4s" />
        <HeroOverlay smokeAnimation="smoke-animation-offset-6s" />
      </div> */}
    </div>
  );
}

export default HeroArea;
