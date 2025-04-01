import { useContext } from "react";
import { ThemeContext } from "../../context/toggle-theme";

function NameCard () {
  const { theme } = useContext(ThemeContext);
  return <h1 className={ theme }>Bernardo Tomas</h1>
};

export default NameCard;