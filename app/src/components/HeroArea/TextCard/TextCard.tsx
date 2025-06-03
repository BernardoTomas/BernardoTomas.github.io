import { ThemeContext } from "../../../context/toggle-theme";
import { useContext } from "react";

import react_logo from "../../../assets/react.png";
import docker_logo from "../../../assets/docker.png";
import node_logo from "../../../assets/node-js.png";
import git_logo from "../../../assets/git.png";
import html_logo from "../../../assets/html.png";
import css_logo from "../../../assets/css.png";
import javascript_logo from "../../../assets/javascript.png";
import typescript_logo from "../../../assets/typescript.png";
import jest_logo from "../../../assets/jest.png";
import sql_logo from "../../../assets/sql.png";
import python_logo from "../../../assets/python.png";
import wordpress_logo from "../../../assets/wordpress.png";

import "./Textcard.css";

function TextCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme + " text-card-container"}>
      <h1>
        BERNARDO <span className="purple-text">TOMAS</span>
      </h1>
      <h3>
        Full Stack Web <span className="purple-text">Developer</span> and{" "}
        <span className="purple-text">Designer</span>
      </h3>
      <button className="hero-cta-btn">Get to know my work</button>
      {/* VVV Modularize this VVV */}
      <div className="favorite-stacks-container">
        <div className="stacks-line">
          <div className="stack-logo">
            <img src={sql_logo} alt="SQL" />
          </div>
          <div className="stack-logo">
            <img src={react_logo} alt="React" />
          </div>
          <div className="stack-logo">
            <img src={docker_logo} alt="Docker" />
          </div>
          <div className="stack-logo">
            <img src={node_logo} alt="Nodejs" />
          </div>
          <div className="stack-logo">
            <img src={git_logo} alt="Nodejs" />
          </div>
        </div>
        <div className="stacks-line">
          <div className="stack-logo">
            <img src={html_logo} alt="HTML" />
          </div>
          <div className="stack-logo">
            <img src={css_logo} alt="CSS" />
          </div>
          <div className="stack-logo">
            <img src={javascript_logo} alt="javascript" />
          </div>
          <div className="stack-logo">
            <img src={python_logo} alt="python" />
          </div>
        </div>
        <div className="stacks-line">
          <div className="stack-logo">
            <img src={typescript_logo} alt="Typescript" />
          </div>
          <div className="stack-logo">
            <img src={jest_logo} alt="Jest" />
          </div>
          <div className="stack-logo">
            <img src={wordpress_logo} alt="wordpress" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextCard;
