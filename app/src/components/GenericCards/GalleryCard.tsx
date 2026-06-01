import { useRef } from "react";
import "./GalleryCard.css";
import ImageCard from "./ImageCard";
import TextCard from "./TextCard";
import Button from "../Buttons/Buttons";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

type GalleryCardProps = {
  imageURL: string;
  imageAlt: string;
  imageStyle: string;
  cardStyle: string;
  subtitle: string;
  pText: string;
  btnLink: string;
  githubLink: boolean;
};

function GalleryCard({
  imageURL,
  imageAlt,
  imageStyle,
  cardStyle,
  subtitle,
  pText,
  btnLink,
  githubLink,
}: GalleryCardProps) {
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
        imageUrl={imageURL}
        imageAlt={imageAlt}
        imageStyle={imageStyle}
      />
      <div className="gallery-card-text-box">
        <TextCard cardStyle={cardStyle} subtitle={subtitle} pText={pText} />
        <Button
          btnLink={btnLink}
          btnContent={githubLink ? FaGithub : FaExternalLinkSquareAlt}
          btnStyle={githubLink ? "btn-1-purple" : "btn-1-blue"}
        />
      </div>
    </div>
  );
}

export default GalleryCard;
