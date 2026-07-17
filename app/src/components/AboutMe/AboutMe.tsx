import { ThemeContext } from "../../context/toggle-theme";
import { useContext } from "react";

import TextCard from "../GenericCards/TextCard";
import ImageCard from "../GenericCards/ImageCard";

import pfp from "../../assets/pfp-cut.jpeg";
import "./AboutMe.css";
// import Carousel from "../Carousel/Carousel";

function AboutMe() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme + " about-me-wrapper"}>
      <div className={"about-me-container"}>
        <div className={"about-me-box"}>
          <div className="about-me-text-card-box">
            <TextCard
              title="Hi! I'm Bernardo,"
              pText="a full-stack web developer passionate about turning ideas into complete web applications: from front-end to back-end. I have experience building modern interfaces with HTML, CSS, JavaScript and React, and developing robust APIs with Node.js, Express.js and MySQL. I also work with Python, apply best practices with SOLID, and organize projects using MSC Architecture and Git."
              highlightedText="''Delta compression using up to four threads, compressing objects: one-hundred per cent (eighteen out of eighteen), done.'' - John Gitzsh, 2026"
              pTextSecondPart="My background in graphic design and paid traffic gives me a broader perspective on the product, always keeping the user experience and end result in mind. I'm a Trybe graduate, fluent in both English and Portuguese, and I work well in team environments using agile methodologies. If you're looking for someone who understands both code and product, let's talk!"
              cardStyle="card-1"
            />
          </div>
          <div className="about-me-image-card-box">
            <ImageCard
              imageUrl={pfp}
              imageAlt="My Face Pic"
              imageStyle="profile-image"
              imageBgStyle="profile-image-bg"
            />
          </div>
        </div>
        {/* <Carousel /> */}
      </div>
    </div>
  );
}

export default AboutMe;
