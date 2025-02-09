import React from "react";
import webAppImage from "../../assets/image 2.png";
import strategyImage from "../../assets/image 1.png";

const Services = () => {
  return (
    <section className="p-10 max-w-[1440px] bg-white mx-auto ">
      <div className="flex flex-col space-y-16 items-center w-[1064px] h-[1000px]">

        {/* Web & Mobile App Development */}
        <div className="flex flex-col md:flex-row items-center max-w-8xl w-full gap-10 px-6 md:px-12">
          <img
            src={webAppImage}
            alt="Web & Mobile App Development"
            className="max-w-8xl md:max-w-none"
          />
          <div className="md:w-2/3 space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-indigo-600">
              Web & Mobile App Development
            </h2>
            <p className="text-gray-700 ">
              Your web and mobile apps are pieces of the puzzle to grow your
              business. We use frameworks that tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <button className="mt-4 bg-orange-500 px-6 py-3 text-white font-bold rounded-md 
                                hover:bg-orange-600 transition-all">
              LEARN MORE
            </button>
          </div>
        </div>
        
        {/* Digital Strategy Consulting */}
        <div className="flex flex-col md:flex-row-reverse items-center max-w-8xl w-full gap-10 px-6 md:px-12">

          <img src={strategyImage} alt="Digital Strategy Consulting" className=" max-w-[200px] md:max-w-none" />
          <div className="md:w-2/3 text-center md:text-left space-y-4">
            <h2 className="text-2xl font-bold text-indigo-600">
              Digital Strategy Consulting
            </h2>
            <p className="text-gray-700">
              Your digital strategy should complement the overall marketing strategy of your company. 
              In online marketing, each component will never work in isolation and every business needs a different mix. 
              We provide a clear concept and strategic overview to find the most efficient model for your business.
            </p>
            <button className="mt-4 bg-orange-500 px-6 py-3 text-white font-bold rounded-md 
                                hover:bg-orange-600 transition-all">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
