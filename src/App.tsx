import { Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import Program from "./pages/Program";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Images from "./pages/Image";
import Review from "./pages/Review";
import WhatsappButton from "./components/WhatsappButton";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programas" element={<Program />} />
        <Route path="/planos" element={<Pricing />} />
        <Route path="/sobre" element={<Images />} />
        <Route path="/localizacao" element={<Review />} />
      </Routes>
      <WhatsappButton />
    </>
  );
}
