import "./StackCard.css";

type StackCardProps = {
  imgSrc: string;
  title: string;
};

function StackCard({ imgSrc, title }: StackCardProps) {
  return (
    <div className="gallery-stack-card">
      <div className="gallery-stack-content">
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default StackCard;
