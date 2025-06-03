import { IconType } from "react-icons";
import React from "react";
import { ThemeContext } from "../../context/toggle-theme";
import { useContext } from "react";
import "./Buttons.css";

function Button(props: { btnContent: string | IconType; btnStyle: string }) {
  const { btnContent, btnStyle } = props;
  const { theme } = useContext(ThemeContext);

  return typeof btnContent === "string" ? (
    <button className={btnStyle + " " + theme}>
      <h4>{btnContent}</h4>
    </button>
  ) : (
    <button className={btnStyle + " icon-btn " + theme}>
      {React.createElement(btnContent)}
    </button>
  );
}

export default Button;
