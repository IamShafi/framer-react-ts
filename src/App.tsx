import "./App.css";
import About from "./components/About";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Howitworks from "./components/Howitworks";

function App() {
  return (
    <div className="main">
      <Header />
      <HeroSection />
      <About />
      <div className="w-full bg-[#F3F7FF] ">
        <Howitworks />
      </div>
      <div className="w-full bg-[#F0E9F3BF] ">
        <FAQ />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
