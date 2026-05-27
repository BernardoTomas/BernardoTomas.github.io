import { ThemeContext } from "../../../context/toggle-theme";
import { useContext } from "react";

// import ThemeBtn from "./ThemeBtn/ThemeBtn";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import ToggleBtn from "../../Buttons/ToggleButton";
import NavMenuLink from "./NavMenuLink";
import "./NavMenu.css";

function NavMenu() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="nav-menu-box">
        <ToggleBtn
          btnFunction={() => changeTheme()}
          btnActiveState={IoSunnyOutline}
          btnInactiveState={IoMoonOutline}
          condition={theme === "dark"}
          btnStyle="theme-btn"
        />
        <div className={theme + " nav-menu-separator"} />
        <ul className="nav-menu">
          <NavMenuLink info={{ anchor: "#home", name: "Home" }} />
          <div className={theme + " nav-menu-separator"} />
          <NavMenuLink info={{ anchor: "#projects", name: "My Projects" }} />
          <div className={theme + " nav-menu-separator"} />
          <NavMenuLink info={{ anchor: "#contact", name: "Contact" }} />
        </ul>
      </div>
    </>
  );
}

export default NavMenu;
