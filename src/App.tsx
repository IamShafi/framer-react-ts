import "./App.css";
import About from "./components/About";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Howitworks from "./components/Howitworks";

function App() {
  return (
    <div className="main">
      <Header />
      <HeroSection />
      <About />
      <Howitworks />
      <div className="w-full bg-[#F0E9F3BF] ">
        <FAQ />
      </div>
      <CTA />
    </div>
  );
}

export default App;
