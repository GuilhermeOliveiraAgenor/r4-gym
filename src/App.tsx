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
        <Route path="/program" element={<Program />} />
        <Route path="/service" element={<Pricing />} />
        <Route path="/about" element={<Images />} />
        <Route path="/review" element={<Review />} />
      </Routes>
      <WhatsappButton />
    </>
  );
}
