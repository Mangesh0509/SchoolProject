import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Academic from "./pages/Academic";
import Header from "./components/Header";
import Infrastructure from "./pages/Infrastructure";
import Achievement from "./pages/Achievement";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Mandatory from "./pages/Mandatory";
import Admission from "./pages/Admission";
import Footer from "./components/Footer";
import StickyIcon1 from "./components/StickyIcon1";
import WhatsApp from "./components/WhatsApp";



function App() {
  return (
    <>
      
      {/* Header */}
      <div>
        <Header />
      </div>
      {/* body */}
      <div>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="admission" element={<Admission />} />
          <Route path="mandatory-public-disclosure" element={<Mandatory />} />
          <Route path="academic" element={<Academic />} />
          {/* <Route path="achievement" element={<Achievement />} /> */}
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {/* Footer */}
      <Footer/>
      <WhatsApp/>
      <StickyIcon1/>
    </>
  );
}

export default App;
