import { useContext } from "react";
import { ThemeContext } from "../../context/toggle-theme";

import "./Gallery.css";
import GalleryCard from "../GenericCards/GalleryCard";

function Gallery() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme + " gallery-wrapper"}>
      <div className="gallery-container">
        <div className="gallery-box">
          <GalleryCard />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
