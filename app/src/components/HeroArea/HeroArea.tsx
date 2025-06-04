import { useContext } from "react";
import { ThemeContext } from "../../context/toggle-theme";
import HeroImageCard from "./HeroImageCard/HeroImageCard";
import HeroTextCard from "./HeroTextCard/HeroTextCard";

import "./HeroArea.css";

function HeroArea() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme + " hero-container"}>
      <div className="hero-content">
        <HeroImageCard />
        <HeroTextCard />
      </div>
    </div>
  );
}

export default HeroArea;
