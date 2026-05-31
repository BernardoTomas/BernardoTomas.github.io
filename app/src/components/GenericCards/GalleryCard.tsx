import { useRef } from "react";
import "./GalleryCard.css";
import ImageCard from "./ImageCard";
import TextCard from "./TextCard";

import bright_academy_thumb from "../../assets/bright_academy_thumb.jpg";

function GalleryCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const mouseCoordsX = event.clientX - rect.left;
    const mouseCoordsY = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const shadow1CoordsX = (mouseCoordsX - centerX) / 2.5;
    const shadow2CoordsX = (mouseCoordsX - centerX) / 5;
    const shadow3CoordsX = (mouseCoordsX - centerX) / 10;
    const shadow1CoordsY = (mouseCoordsY - centerY) / 2.5;
    const shadow2CoordsY = (mouseCoordsY - centerY) / 5;
    const shadow3CoordsY = (mouseCoordsY - centerY) / 10;

    card.style.setProperty("--shadow-1-x", `${shadow1CoordsX}px`);
    card.style.setProperty("--shadow-2-x", `${shadow2CoordsX}px`);
    card.style.setProperty("--shadow-3-x", `${shadow3CoordsX}px`);
    card.style.setProperty("--shadow-1-y", `${shadow1CoordsY}px`);
    card.style.setProperty("--shadow-2-y", `${shadow2CoordsY}px`);
    card.style.setProperty("--shadow-3-y", `${shadow3CoordsY}px`);
  };

  return (
    <div className="gallery-card" ref={cardRef} onMouseMove={handleMouseMove}>
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
