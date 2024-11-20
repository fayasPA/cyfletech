import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ClientMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animating the map dots with pulsing effect
      gsap.fromTo(
        ".map-dot",
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Adding pulse animation to each dot
      gsap.to(".map-dot-pulse", {
        scale: 1.3,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power2.out",
      });
    }, mapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-4" ref={mapRef}>
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-50">
            Where Our Clients Are Based
          </h2>
        </div>

        {/* Map Section */}
        <div className="relative mx-auto max-w-5xl">
          <img
            src="https://cdn.prod.website-files.com/6405fcf125150a174dce6e85/64245381585c920aea4ce572_matteo-clients-map.svg"
            alt="Clients Map"
            className="w-full rounded-lg shadow-md"
          />

          {/* Map Dots */}
          <div className="absolute top-0 left-0 w-full h-full">
            <Dot className="top-[35%] left-[60%]" label="Denmark" />
            <Dot className="top-[50%] left-[70%]" label="Portugal" />
            <Dot className="top-[40%] left-[75%]" label="France" />
            <Dot className="top-[42%] left-[68%]" label="UK" />
            <Dot className="top-[47%] left-[55%]" label="Germany" />
            <Dot className="top-[49%] left-[50%]" label="Italy" />
            <Dot className="top-[30%] left-[35%]" label="Michigan" />
            <Dot className="top-[32%] left-[25%]" label="Oregon" />
            <Dot className="top-[28%] left-[18%]" label="LA" />
            <Dot className="top-[35%] left-[40%]" label="Nebraska" />
            <Dot className="top-[25%] left-[50%]" label="NYC" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Dot Component
const Dot = ({ className, label }) => (
  <div
    className={`absolute map-dot ${className} flex flex-col items-center group`}
  >
    {/* Inner Dot */}
    <div className="w-3 h-3 rounded-full bg-green"></div>
    {/* Pulse Effect */}
    <div className="absolute w-8 h-8 rounded-full bg-blue-500 opacity-20 map-dot-pulse"></div>
    {/* Label */}
  {/*  <div className="mt-2 hidden text-sm text-gray-700 group-hover:block">
      {label}
    </div>  */} 
  </div>
);

export default ClientMap;
