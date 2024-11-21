import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faqData } from "../assets/js/data";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const faqDetails = gsap.utils.toArray(".faq-content:not(:first-child)");
    const faqPhotos = gsap.utils.toArray(".faq-photo:not(:first-child)");
    gsap.set(faqPhotos, { yPercent: 101 });

    const allFaqPhotos = gsap.utils.toArray(".faq-photo");

    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      ScrollTrigger.create({
        trigger: ".faq-container",
        start: "top top",
        end: "bottom bottom",
        pin: ".faq-right",
      });

      faqDetails.forEach((detail, index) => {
        let headline = detail.querySelector("h1");
        let animation = gsap.timeline()
          .to(faqPhotos[index], { yPercent: 0 })
          .set(allFaqPhotos[index], { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });
  }, []);

  return (
    <div className="faq-container flex flex-col md:flex-row bg-white text-black">
      {/* Right Section */}
      <div className="faq-right flex flex-col justify-start items-center w-full md:w-1/2 h-auto md:h-screen">
        <h1 className="text-4xl md:text-6xl font-serif text-center mt-8 md:mt-0">
          FAQs
        </h1>
      </div>

      {/* Left Section */}
      <div className="faq-left flex-1 md:w-1/2">
        <ul className="faq-content mx-auto w-4/5">
          {faqData.map((faq, index) => (
            <li
              key={index}
              className={`faq-section border-b last:border-none transition-all duration-300 h-96 overflow-hidden`}
            >
              <button
                className="w-full flex justify-between items-center text-lg font-medium focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="ml-2 text-gray-500">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              <div
                className={`transition-opacity duration-300 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
