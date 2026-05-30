import "./GalleryCard.css";
import ImageCard from "./ImageCard";
import TextCard from "./TextCard";

import bright_academy_thumb from "../../assets/bright_academy_thumb.jpg";

function GalleryCard() {
  return (
    <div className="gallery-card">
      <ImageCard
        imageUrl={bright_academy_thumb}
        imageAlt="Bright Academy Thumbnail"
        imageStyle="gallery-card-image"
      />
      <TextCard
        cardStyle="gallery-text-card"
        subtitle="Lorem Ipsum"
        pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
}

export default GalleryCard;
