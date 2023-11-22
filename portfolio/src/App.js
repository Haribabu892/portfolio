import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Navbar from "./Navbar";
import All from "./All";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="scroll-smooth">
      <div className=" container w-[90%] max-w-screen-lg mx-auto text-white">
        <Navbar />
        <div className="mt-28">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<All />} />
          </Routes>
        </div>
      </div>
      <div className="text-white w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
