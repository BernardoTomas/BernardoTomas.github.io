import smokeOverlayBottom from "../../../assets/smoke_overlay_bottom.png";
import "./HeroOverlay.css";

type heroOverlayProps = {
  smokeAnimation: string;
};

function HeroOverlay(props: heroOverlayProps) {
  const { smokeAnimation } = props;

  return (
    <div className={"smoke-container-purple " + smokeAnimation}>
      <img
        className="smoke1"
        src={smokeOverlayBottom}
        alt="smoke effect overlay"
      />
      <div className="smoke-container-yellow">
        <img
          className="smoke2"
          src={smokeOverlayBottom}
          alt="smoke effect overlay"
        />
      </div>
    </div>
  );
}

export default HeroOverlay;
