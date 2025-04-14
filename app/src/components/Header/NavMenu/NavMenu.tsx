import ThemeBtn from "./ThemeBtn/ThemeBtn";
import NavMenuLink from "./NavMenuLink";
import './NavMenu.css';

function NavMenu () {
  return (
    <>
      <div className="nav-menu-box">
        <ul className="nav-menu">
          <NavMenuLink info={ { anchor:"#home", name:"Home" } } />
          <NavMenuLink info={ { anchor:"#projects", name:"My Projects" } } />
          <NavMenuLink info={ { anchor:"#contact", name:"Contact" } } />
        </ul>
        <ThemeBtn />
      </div>
    </>
  )
}

export default NavMenu;