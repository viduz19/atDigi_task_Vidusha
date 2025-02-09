import React from "react";
import Navbar from "./Navbar";
import FAQ from "./FAQ";
import Footer from "./Footer";

const Components = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-8">
      {/* Navbar */}
      <Navbar />

      {/* Call-to-Action Button */}
      <div className="mt-8">
        <a href="#hero-section" className="bg-orange-500 text-white px-6 py-3 font-bold rounded-md shadow-md hover:bg-orange-600 transition-all">
          GET FREE CONSULTATION
        </a>
      </div>

      {/* FAQ Section */}
      <div className="mt-8 w-full max-w-2xl">
        <FAQ />
      </div>

      {/* Footer */}
      <div className="mt-8 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Components;
