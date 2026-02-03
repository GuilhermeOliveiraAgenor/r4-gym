import "./styles/styles.css";

import class1 from "./assets/class-1.jpg";
import class2 from "./assets/class-2.jpg";
import header from "./assets/header.png";
import join from "./assets/join.jpg";
import logo from "./assets/logo.png";
import member from "./assets/member.jpg";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";


export default function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Footer/>
    </>
  );
}
