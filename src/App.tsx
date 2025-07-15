import "./App.css";
import About from "./components/About";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Howitworks from "./components/Howitworks";

function App() {
  return (
    <div className="main">
      <HeroSection />
      <div id="learn-more">
        <About />
      </div>
      <div id="how-it-works" className="w-full bg-[#F3F7FF] ">
        <Howitworks />
      </div>
      <div id="faq" className="w-full bg-[#F0E9F3BF] ">
        <FAQ />
      </div>
      <div id="contact-us">
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
