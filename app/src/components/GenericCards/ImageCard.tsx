import "./ImageCard.css";

type ImageCardProps = {
  id?: string;
  imageUrl: string;
  imageAlt: string;
  imageStyle: string;
  imageBgStyle?: string;
};

function ImageCard(props: ImageCardProps) {
  const { imageUrl, imageAlt, imageStyle, imageBgStyle, id } = props;

  return (
    <div
      id={id || undefined}
      className={(imageBgStyle || "") + " image-container"}
    >
      <img className={imageStyle} src={imageUrl} alt={imageAlt} />
    </div>
  );
}

export default ImageCard;
