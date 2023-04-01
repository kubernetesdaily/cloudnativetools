import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ToolsSection from "./components/ToolsSection";

function App() {
  return (
    <div className="text-primary max-w-[1280px] mx-auto">
      <Hero />
      <hr className="text-white" />
      <ToolsSection />
      <Footer />
    </div>
  );
}

export default App;
