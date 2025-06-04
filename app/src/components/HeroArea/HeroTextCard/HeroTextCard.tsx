import { ThemeContext } from "../../../context/toggle-theme";
import { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import StacksLine from "./StacksLine";
import Button from "../../Buttons/Buttons";

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

import "./HeroTextCard.css";

function HeroTextCard() {
  const { theme } = useContext(ThemeContext);

  const favStacks = [
    [sql_logo, react_logo, docker_logo, node_logo, git_logo],
    [html_logo, css_logo, javascript_logo, python_logo],
    [typescript_logo, jest_logo, wordpress_logo],
  ];

  return (
    <div className={theme + " text-card-container"}>
      <div className="text-and-btns-box">
        <h1>
          BERNARDO <span className="purple-text">TOMAS</span>
        </h1>
        <h3>
          Full Stack Web <span className="purple-text">Developer</span> and Web{" "}
          <span className="purple-text">Designer</span>
        </h3>
        <div className="hero-btns-container">
          <Button
            btnLink="https://www.google.com"
            btnContent="Check out my work"
            btnStyle="btn-1-blue"
          />
          <Button
            btnLink="https://github.com/BernardoTomas"
            btnContent={FaGithub}
            btnStyle="btn-1-purple"
          />
          <Button
            btnLink="https://www.linkedin.com/in/bernardocan%C3%A7ado/"
            btnContent={FaLinkedin}
            btnStyle="btn-1-purple"
          />
        </div>
      </div>

      <div className="favorite-stacks-container">
        {favStacks.map((line, index) => (
          <StacksLine stacks={line} key={index} />
        ))}
      </div>
    </div>
  );
}

export default HeroTextCard;
