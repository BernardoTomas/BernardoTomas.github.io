import { ThemeContext } from "../../../context/toggle-theme";
import "./NavMenu.css";
import { useContext } from "react";

type NavMenuPropsType = { 
  info: {
    anchor: string;
    name: string;
  }
}

function NavMenuLink (props: NavMenuPropsType) { 
  const { anchor, name } = props.info;
  const { theme } = useContext(ThemeContext);

  return (
    <li>
      <a href={anchor} className={theme + "nav-menu-item"}>
        {name}
      </a>
    </li>
  )
}

export default NavMenuLink;