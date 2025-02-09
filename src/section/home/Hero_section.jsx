import React from "react";
import heroImage from "../../assets/andy-kelly-0E_vhMVqL9g-unsplash 2.png";

const HeroSection = () => {
  return (
    <section className="relative max-w-[1440px] w-full h-auto flex items-center justify-center mx-auto">
      {/* Background Image */}
      <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />

      {/* Hero Content */}
      <div className="absolute bottom-5 left-5 md:left-10 md:bottom-1 w-[90%] md:w-[600px] lg:w-[750px] bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 md:p-10 space-y-5 shadow-lg rounded-lg">
        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <button className="bg-orange-500 px-6 py-3 text-white font-bold rounded-md shadow-md hover:bg-orange-600 transition-all">
          GET FREE CONSULTATION
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
