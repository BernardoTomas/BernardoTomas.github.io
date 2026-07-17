import { useContext } from "react";
import { ThemeContext } from "../../context/toggle-theme";

import "./Gallery.css";
import GalleryCard from "../GenericCards/GalleryCard";
import galleryData from "../../data/galleryData";
import {
  languagesStacks,
  frontEndStacks,
  backEndStacks,
  serverStacks,
  otherStacks,
  designStacks,
} from "../../data/stacksData";

import StackCard from "../GenericCards/StackCard";

function Gallery() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="projects" className={theme + " gallery-wrapper"}>
      <div className="gallery-container">
        <h2 className="gallery-title title-right">My Projects</h2>
        <div className="gallery-title-separator gallery-separator-right" />
        <div className="gallery-box">
          {galleryData.map((cardContent, index) => (
            <GalleryCard key={index} {...cardContent} />
          ))}
        </div>
        <h2 className="gallery-title title-left">My Stacks</h2>
        <div className="gallery-title-separator gallery-separator-left" />
        <h3 className="gallery-subtitle">Languages</h3>
        <div className="gallery-box stacks-gallery-box">
          {languagesStacks.map((stack, index) => (
            <StackCard key={index} imgSrc={stack.url} title={stack.name} />
          ))}
        </div>
        <h3 className="gallery-subtitle">Frontend</h3>
        <div className="gallery-box stacks-gallery-box">
          {frontEndStacks.map((stack, index) => (
            <StackCard key={index} imgSrc={stack.url} title={stack.name} />
          ))}
        </div>
        <h3 className="gallery-subtitle">Backend</h3>
        <div className="gallery-box stacks-gallery-box">
          {backEndStacks.map((stack, index) => (
            <StackCard key={index} imgSrc={stack.url} title={stack.name} />
          ))}
        </div>
        <h3 className="gallery-subtitle">Server</h3>
        <div className="gallery-box stacks-gallery-box">
          {serverStacks.map((stack, index) => (
            <StackCard key={index} imgSrc={stack.url} title={stack.name} />
          ))}
        </div>
        <h3 className="gallery-subtitle">Design</h3>
        <div className="gallery-box stacks-gallery-box">
          {designStacks.map((stack, index) => (
            <StackCard key={index} imgSrc={stack.url} title={stack.name} />
          ))}
        </div>
        <h3 className="gallery-subtitle">Other Stacks</h3>
        <div className="gallery-box stacks-gallery-box">
          {otherStacks.map((stack, index) => (
            <StackCard key={index} imgSrc={stack.url} title={stack.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
