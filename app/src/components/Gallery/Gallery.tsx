import { useContext } from "react";
import { ThemeContext } from "../../context/toggle-theme";

import "./Gallery.css";
import GalleryCard from "../GenericCards/GalleryCard";
import galleryData from "../../data/galleryData";

function Gallery() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme + " gallery-wrapper"}>
      <div className="gallery-container">
        <h2 className="gallery-title">My Projects</h2>
        <div className="gallery-box">
          {galleryData.map((cardContent, index) => (
            <GalleryCard key={index} {...cardContent} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
