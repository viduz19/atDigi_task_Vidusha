import React, { useState } from "react";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 p-4 text-white flex justify-between items-center max-w-[1440px] w-full mx-auto">
      {/* Logo */}
      <div className="flex items-center space-x-2 pl-8 ">
  <img src={logo} alt="Company Logo" className="h-[50px] w-[226px]" />
       </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#" className="hover:underline">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Careers
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-white text-2xl "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white  text-black p-6 transition-all duration-300  z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>
        <ul className="mt-10 space-y-6">
          <li>
            <a
              href="#"
              className="hover:underline block"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline block"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline block"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline block"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
