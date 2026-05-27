import { ThemeContext } from "../../../context/toggle-theme";
import { useContext, useState } from "react";

import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { TiThMenu, TiThMenuOutline } from "react-icons/ti";
import ToggleBtn from "../../Buttons/ToggleButton";
import NavMenuLink from "./NavMenuLink";
import "./NavMenu.css";

function NavMenu() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [isBurgerNavOpen, setIsBurgerNavOpen] = useState(false);

  const burgerNavOpen = isBurgerNavOpen;

  const handleBurgerNav = () => {
    setIsBurgerNavOpen(!burgerNavOpen);
  };

  return (
    <>
      <div className="nav-menu-box">
        <ToggleBtn
          btnFunction={() => changeTheme()}
          btnActiveState={IoSunnyOutline}
          btnInactiveState={IoMoonOutline}
          condition={theme === "dark"}
          btnStyle="nav-toggle-btn theme-btn"
        />
        <div className={theme + " nav-menu-separator"} />
        <ul className="nav-menu">
          <NavMenuLink info={{ anchor: "#home", name: "Home" }} />
          <div className={theme + " nav-menu-separator"} />
          <NavMenuLink info={{ anchor: "#projects", name: "My Projects" }} />
          <div className={theme + " nav-menu-separator"} />
          <NavMenuLink info={{ anchor: "#contact", name: "Contact" }} />
        </ul>
        <div className={"hamburger-menu-container"}>
          <ToggleBtn
            btnFunction={() => handleBurgerNav()}
            btnActiveState={TiThMenuOutline}
            btnInactiveState={TiThMenu}
            condition={isBurgerNavOpen}
            btnStyle="nav-toggle-btn hamburger-menu-btn-style
             hamburger-menu-btn"
          />
          <ul
            className={
              isBurgerNavOpen ? "hamburger-nav-menu open" : "hamburger-nav-menu"
            }
          >
            <NavMenuLink info={{ anchor: "#home", name: "Home" }} />
            <div className={theme + " burger-nav-menu-separator"} />
            <NavMenuLink info={{ anchor: "#projects", name: "My Projects" }} />
            <div className={theme + " burger-nav-menu-separator"} />
            <NavMenuLink info={{ anchor: "#contact", name: "Contact" }} />
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavMenu;
