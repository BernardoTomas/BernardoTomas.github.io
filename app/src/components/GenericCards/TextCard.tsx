import { useContext } from "react";
import { ThemeContext } from "../../context/toggle-theme";

import "./TextCard.css";

type TextCardProps = {
  title?: string;
  subtitle?: string;
  pText?: string;
  highlightedText?: string;
  pTextSecondPart?: string;
  cardStyle: string;
  buttonContent?: string;
  buttonStyle?: string;
};

function TextCard(props: TextCardProps) {
  const { theme } = useContext(ThemeContext);
  const {
    title,
    subtitle,
    highlightedText,
    pText,
    pTextSecondPart,
    cardStyle,
  } = props;

  return (
    <div className={cardStyle + " " + theme + " card-container"}>
      {title ? <h2>{title}</h2> : ""}
      {title ? <h3>{subtitle}</h3> : ""}
      {pText ? <p>{pText}</p> : ""}
      {highlightedText ? <h4>{highlightedText}</h4> : ""}
      {pTextSecondPart ? <p>{pTextSecondPart}</p> : ""}
    </div>
  );
}

export default TextCard;
