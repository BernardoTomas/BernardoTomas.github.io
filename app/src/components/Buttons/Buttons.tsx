import { IconType } from "react-icons";
import React from "react";
import { ThemeContext } from "../../context/toggle-theme";
import { useContext } from "react";
import "./Buttons.css";

function Button(props: {
  btnLink: string;
  btnContent: string | IconType;
  btnStyle: string;
  btntype?: "button" | "submit" | "reset";
}) {
  const { btnContent, btnStyle, btnLink, btntype } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <a href={btnLink} target="_blank">
      {typeof btnContent === "string" ? (
        <button className={btnStyle + " " + theme} type={btntype}>
          <h4>{btnContent}</h4>
        </button>
      ) : (
        <button className={btnStyle + " icon-btn " + theme} type={btntype}>
          {React.createElement(btnContent)}
        </button>
      )}
    </a>
  );
}

export default Button;
