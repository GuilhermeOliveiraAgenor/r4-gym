import { Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import Program from "./pages/Program";
import Home from "./pages/Home";


export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/program" element={<Program/>} />
    </Routes>
);
}
