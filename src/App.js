import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Homepage from "./pages/Homepage";
import Projects from "./pages/projects/Projects";
import Footer from "./components/footer/Footer";
import A2XCase from "./case-studies/a2x/A2XCase";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import DoseCase from "./case-studies/doseandco/DoseCase";
import BeautyNinja from "./case-studies/beautynj/BeautyNinja";
import Sohl from "./case-studies/sohl/Sohl";
import Thematic from "./case-studies/thematic/Thematic";
import Vari from "./case-studies/vari/Vari";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/a2xcase" element={<A2XCase />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dosecase" element={<DoseCase />} />
        <Route path="/beautyninja" element={<BeautyNinja />} />
        <Route path="/sohl" element={<Sohl />} />
        <Route path="/thematic" element={<Thematic />} />
        <Route path="/vari" element={<Vari />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
