import React from "react";
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white p-10 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section */}
        <div className="md:w-2/5">
          <img src={logo} alt="Logo" className="h-10 mb-4" />
          <p className="text-sm leading-relaxed">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>

        {/* Center Section */}
        <div className="md:w-1/5">
          <h3 className="text-lg font-semibold">Our Technologies</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/5">
          <h3 className="text-lg font-semibold">Our Services</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t border-white pt-4 text-center text-sm">
        <p className="cursor-pointer hover:underline">
          Privacy Policy | Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
