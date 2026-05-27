import { ThemeContext } from "../../context/toggle-theme";
import { useContext, createElement } from "react";
import "./Buttons.css";
import { IconType } from "react-icons";

function ToggleBtn(props: {
  btnFunction: () => void;
  btnActiveState: IconType;
  btnInactiveState: IconType;
  condition: boolean;
  btnStyle: string;
}) {
  const { theme } = useContext(ThemeContext);
  const { btnFunction, btnActiveState, btnInactiveState, condition, btnStyle } =
    props;

  return (
    <button onClick={() => btnFunction()} className={theme + " " + btnStyle}>
      {condition
        ? createElement(btnActiveState)
        : createElement(btnInactiveState)}
    </button>
  );
}

export default ToggleBtn;
