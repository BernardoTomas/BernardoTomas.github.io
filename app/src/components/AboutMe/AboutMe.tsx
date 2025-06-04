import { ThemeContext } from "../../context/toggle-theme";
import { useContext } from "react";

function AboutMe() {
  const { theme } = useContext(ThemeContext);

  return <div className={theme + " about-me-container"}>About me</div>;
}

export default AboutMe;
