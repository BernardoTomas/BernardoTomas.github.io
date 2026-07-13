import { useContext } from "react";
import { ThemeContext } from "../../context/toggle-theme";

import "./Gallery.css";
import GalleryCard from "../GenericCards/GalleryCard";
import galleryData from "../../data/galleryData";

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
        <div className="gallery-box"></div>
      </div>
    </div>
  );
}

export default Gallery;
