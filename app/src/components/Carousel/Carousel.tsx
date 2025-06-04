import ImageCard from "../GenericCards/ImageCard";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Carousel.css";
import { useState } from "react";
import sample_image from "../../assets/sample_image.jpg";
import pfp from "../../assets/pfp.jpeg";

function Carousel() {
  const [imgList, setImgList] = useState<string[]>([
    pfp,
    sample_image,
    sample_image,
    sample_image,
    pfp,
  ]);

  const handleScrollUp = () => {
    const newImgList = [...imgList];
    const firstImg = newImgList.shift();
    if (firstImg) newImgList.push(firstImg);
    setImgList(newImgList);
  };

  const handleScrollDown = () => {
    const newImgList = [...imgList];
    const lastImg = newImgList.pop();
    if (lastImg) newImgList.unshift(lastImg);
    setImgList(newImgList);
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <button className="carousel-btn" onClick={handleScrollUp}>
          <FaChevronUp />
        </button>
        {imgList.map((image, index) => (
          <ImageCard
            key={"key-" + index}
            id={"img-" + index}
            imageUrl={image}
            imageAlt="sample image"
            imageStyle="carousel-image"
          />
        ))}
        <button className="carousel-btn" onClick={handleScrollDown}>
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
