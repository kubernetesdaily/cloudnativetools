import "./App.css";
import Hero from "./components/Hero";
import ToolsSection from "./components/ToolsSection";

function App() {
  return (
    <div className="text-primary max-w-[1280px] mx-auto">
      <Hero />
      <hr className="text-white" />
      <ToolsSection />
    </div>
  );
}

export default App;
