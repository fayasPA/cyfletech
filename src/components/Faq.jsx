import React, { useState } from "react";
import { faqData } from "../assets/js/data";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className=" w-full mx-auto p-6 bg-white flex flex-col">
      <h1 className="text-4xl font-serif text-center mb-10">FAQs</h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4"
          >
            <button
              className="w-full flex justify-between items-center text-left text-xl font-medium hover:text-gray-600 focus:outline-none"
              onClick={() => toggleDropdown(index)}
            >
              <span className="text-slate-800"> {item.question}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <p className="text-slate-600 mt-2 pl-6">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
