import React from "react";
import Navbar from "./section/Main_section/NavBar";
import HeroSection from "./section/home/Hero_section";
import Services from "./section/home/Services_section";
import FAQ from "./section/home/Faq_section";
import Footer from "./section/Main_section/Footer";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <HeroSection />
      <Services />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
