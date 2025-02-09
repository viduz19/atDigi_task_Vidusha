import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white p-10 max-w-[1440px] w-full mx-auto">
      <h2 className="text-2xl font-bold text-center text-indigo-600">
        Frequently Asked Questions
      </h2>
      <div className="mt-6 max-w-2xl mx-auto space-y-4">
        {[
          {
            question:
              "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
            answer:
              "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
          },
          {
            question:
              "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
            answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
          },
          {
            question:
              "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
            answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
          },
        ].map((faq, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg cursor-pointer border transition-all ${
              openIndex === index
                ? "bg-indigo-50 border-indigo-600"
                : "bg-gray-100 border-gray-300"
            }`}
            onClick={() => toggleFAQ(index)}
            onKeyDown={(e) => e.key === "Enter" && toggleFAQ(index)}
            tabIndex={0}
            role="button"
            aria-expanded={openIndex === index}
          >
            <div className="flex justify-between items-center">
              <p
                className={`font-semibold transition ${
                  openIndex === index ? "text-indigo-600" : "text-gray-900"
                }`}
              >
                {faq.question}
              </p>
              <span className="text-lg font-bold">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
