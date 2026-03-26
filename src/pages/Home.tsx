import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SectionFeature from "../components/SectionFeature";
import SectionHero from "../components/SectionHero";
import SectionHome from "../components/SectionHome";
import SectionImage from "../components/SectionImage";

export default function Home() {
  return (
    <>
      <img
  src="/preview.png"
  alt="Academia R4 Gym Curitiba"
  width="1200"
  height="630"
  style={{
    position: "absolute",
    left: "-9999px",
  }}
/>
      <Nav />
      <SectionHero />
      <SectionImage />
      <SectionFeature />
      <SectionHome />
      <Footer />
    </>
  );
}
