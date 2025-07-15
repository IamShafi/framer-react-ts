import "./App.css";
import About from "./components/About";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Howitworks from "./components/Howitworks";

function App() {
  return (
    <div className="main">
      <Header />
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
