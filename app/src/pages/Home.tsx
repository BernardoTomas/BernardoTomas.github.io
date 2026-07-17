import Header from "../components/Header/Header";
import HeroArea from "../components/HeroArea/HeroArea";
import AboutMe from "../components/AboutMe/AboutMe";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";

function HomePage() {
  return (
    <>
      <Header />
      <HeroArea />
      <AboutMe />
      <Gallery />
      <Contact />
    </>
  );
}

export default HomePage;
