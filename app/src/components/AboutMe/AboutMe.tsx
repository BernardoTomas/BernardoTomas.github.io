import { ThemeContext } from "../../context/toggle-theme";
import { useContext } from "react";

import TextCard from "../GenericCards/TextCard";

import "./AboutMe.css";

function AboutMe() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme + " about-me-wrapper"}>
      <div className={"about-me-container"}>
        <TextCard
          title="About Me"
          pText="I am a passionate Full Stack Web Developer and Designer with a keen interest in creating innovative solutions. My journey in web development has equipped me with a diverse skill set, enabling me to tackle complex challenges and deliver high-quality applications."
          cardStyle="card-1"
        />
      </div>
    </div>
  );
}

export default AboutMe;
