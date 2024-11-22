import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whyWorkWithUsData } from "../assets/js/data";

gsap.registerPlugin(ScrollTrigger);

const WhyWorkWithMe = () => {
  const desktopContentSectionsRef = useRef([]);
  const galleryRef = useRef(null);
  const rightPanelRef = useRef(null);

  useEffect(() => {
    const isAboveMd = window.matchMedia("(min-width: 768px)").matches; // Tailwind's `md` breakpoint is 768px

    if (isAboveMd) {
      const details = desktopContentSectionsRef.current.slice(1); // Exclude the first section

      // Set initial positions for photos

      // Create ScrollTrigger for the right panel pinning
      ScrollTrigger.create({
        trigger: galleryRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: rightPanelRef.current,
      });
    }

    // Cleanup ScrollTrigger instances on unmount
    return () => {
      if (isAboveMd) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <div ref={galleryRef} className="flex bg-white">
      {/* Left Content */}
      <div
        ref={rightPanelRef}
        className="w-full md:w-1/2 h-auto md:h-screen flex flex-col justify-center"
      >
        <div className="md:w-[40vw] md:h-[40vw] overflow-hidden flex justify-center items-center mx-auto">
          <span className="text-3xl md:text-8xl font-extralight py-10">
            Why work with us?
          </span>
        </div>

        {/* Mobile Content */}
        <div className="block md:hidden w-4/5 mx-auto space-y-5">
          {whyWorkWithUsData.map((data) => (
            <div
              key={data.id}
              className="bg-selGray-light rounded-lg shadow-md border border-borderColor3 p-6"
            >
              <h1 className="text-5xl font-bold text-black mb-4">{data.id}.</h1>
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                {data.header}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Content */}
      <div className="w-1/2 hidden md:block">
        <div className="mx-auto w-4/5">
          {whyWorkWithUsData.map((data, index) => (
            <div
              key={data.id}
              ref={(el) => (desktopContentSectionsRef.current[index] = el)}
              className="min-h-screen flex flex-col justify-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold">
                {data.id}. {data.header}
              </h1>
              <p className="text-lg md:text-2xl mt-4">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithMe;
