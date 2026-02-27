import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SectionHero from "../components/SectionHero";
import SectionHome from "../components/SectionHome";
import SectionImage from "../components/SectionImage";

export default function Home() {
  return (
    <>
      <Nav/>
      <SectionHero />
      <SectionImage />
      <SectionHome />
      <Footer/>
    </>
  );
}
