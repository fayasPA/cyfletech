import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "I provide a variety of services including web development, UI/UX design, and animation.",
    },
    {
      question: "How long does it take?",
      answer: "Project timelines vary, but most projects take between 2 to 6 weeks depending on complexity.",
    },
    {
      question: "Why do you develop in Webflow?",
      answer: "Webflow allows for visually stunning and responsive websites with quick turnaround times.",
    },
    {
      question: "How much does it cost?",
      answer: "Every project is unique. Prices typically range from $5,000 to $30,000.",
    },
    {
      question: "Do you work internationally?",
      answer: "Yes, I work with clients from all over the world, ensuring clear communication and smooth collaboration.",
    },
    {
      question: "What does working together look like?",
      answer: "We start with understanding your needs, followed by design mockups, development, and final delivery.",
    },
    {
      question: "Will I like working with you?",
      answer: "My clients appreciate my transparent process and dedication to delivering high-quality work.",
    },
  ];

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
