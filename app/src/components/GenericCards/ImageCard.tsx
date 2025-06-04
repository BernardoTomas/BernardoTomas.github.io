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
    <div id={id} className={imageBgStyle + " image-container"}>
      <p>{id}</p>
      <img className={imageStyle} src={imageUrl} alt={imageAlt} />
    </div>
  );
}

export default ImageCard;
