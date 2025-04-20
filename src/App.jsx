import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ToolsSection from "./components/ToolsSection";
import Navbar from './components/Navbar';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

// Create a layout for the main landing page
function HomeLayout() {
  return (
    <>
      <Hero />
      <hr className="text-white max-w-7xl mx-auto border-gray-700" />
      <ToolsSection />
    </>
  );
}

function App() {
  return (
    <div className="bg-bgPrimary min-h-screen flex flex-col text-white font-sans">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
