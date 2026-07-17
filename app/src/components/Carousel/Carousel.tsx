import ImageCard from "../GenericCards/ImageCard";
import { /*FaChevronRight,*/ FaChevronLeft } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import sample_image from "../../assets/sample_image.jpg";
import pfp from "../../assets/pfp.jpeg";
import "./Carousel.css";

type ImageList = [string, string][];

function Carousel() {
  const imgMapRef = useRef(new Map<string, HTMLDivElement>());
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const [centerImgId, setCenterImgId] = useState<string>("cool-carousel-img-2");

  const realImgArr: ImageList = [
    ["cool-carousel-img-2", pfp],
    ["cool-carousel-img-3", sample_image],
    ["cool-carousel-img-4", sample_image],
    ["cool-carousel-img-5", pfp],
    ["cool-carousel-img-6", sample_image],
  ];

  const renderedImgArr: ImageList = [
    ["cool-carousel-img-0", realImgArr[realImgArr.length - 2][1]],
    ["cool-carousel-img-1", realImgArr[realImgArr.length - 1][1]],
    ...realImgArr,
    [
      "cool-carousel-img-" + (realImgArr.length + 2).toString(),
      realImgArr[0][1],
    ],
    [
      "cool-carousel-img-" + (realImgArr.length + 3).toString(),
      realImgArr[1][1],
    ],
  ];

  useEffect(() => {
    const centerImgNode = imgMapRef.current.get(centerImgId);
    const carouselContainerNode = carouselContainerRef.current;
    const imageWidth =
      imgMapRef.current.get("cool-carousel-img-0")?.offsetWidth || 0;
    const scrollDistance = imageWidth * 2 + imageWidth / 2;

    if (!carouselContainerNode || !centerImgNode) return;

    centerImgNode.classList.add("center-img");
    carouselContainerNode.scrollTo({
      left: scrollDistance,
      behavior: "instant",
    });
  }, []);

  const handleVisibleImgStyles = (
    newCenterImgId: string,
    lastCenterImgId?: string
  ) => {
    const newCenterImgNode = imgMapRef.current.get(newCenterImgId);
    const lastCenterImgNode = lastCenterImgId
      ? imgMapRef.current.get(lastCenterImgId)
      : undefined;

    if (!newCenterImgNode) return;
    newCenterImgNode.classList.add("center-img");
    if (lastCenterImgNode) {
      lastCenterImgNode.classList.remove("center-img");
    }
  };

  // const handleScrollMovement = () => {};

  const handleScrollLeft = () => {
    const centerImgIdNumber = Number(centerImgId.match(/\d+/g)?.[0] || 0);
    let newCenterImgId =
      "cool-carousel-img-" + (centerImgIdNumber - 1).toString();

    if (newCenterImgId === "cool-carousel-img-1") {
      handleVisibleImgStyles(
        "cool-carousel-img-" + (realImgArr.length + 1).toString()
      );
    }

    if (newCenterImgId === "cool-carousel-img-0") {
      newCenterImgId =
        "cool-carousel-img-" + (realImgArr.length + 1).toString();
      const postLoopImgId = "cool-carousel-img-" + realImgArr.length.toString();

      handleVisibleImgStyles(newCenterImgId, "cool-carousel-img-0");
      setCenterImgId(newCenterImgId);

      const centerImgNode = imgMapRef.current.get(newCenterImgId);

      if (!centerImgNode) return;
      centerImgNode.scrollIntoView({
        behavior: "instant",
        block: "nearest",
        inline: "center",
      });

      handleVisibleImgStyles(postLoopImgId, newCenterImgId);
      newCenterImgId = postLoopImgId;
    }

    handleVisibleImgStyles(newCenterImgId, centerImgId);
    setCenterImgId(newCenterImgId);

    const centerImgNode = imgMapRef.current.get(newCenterImgId);
    if (!centerImgNode) return;

    centerImgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="carousel-wrapper">
      <button className="carousel-btn" onClick={handleScrollLeft}>
        <FaChevronLeft />
      </button>
      <div className="carousel-container" ref={carouselContainerRef}>
        {renderedImgArr.map((image, index) => (
          <div
            id={image[0]}
            className="img-wrapper"
            key={"key-" + index}
            ref={(node) => {
              if (node) imgMapRef.current.set(image[0], node as HTMLDivElement);
              return () => {
                imgMapRef.current.delete(image[0]);
              };
            }}
          >
            <ImageCard
              imageUrl={image[1]}
              imageAlt="sample image"
              imageStyle="carousel-image"
            />
          </div>
        ))}
      </div>
      {/* <button className="carousel-btn" onClick={handleScrollRight}>
        <FaChevronRight />
      </button> */}
    </div>
  );
}

export default Carousel;
