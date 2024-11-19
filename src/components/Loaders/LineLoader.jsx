import React, { useEffect, useState } from "react";
import gsap from "gsap";

const LineLoader = () => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let current = 0;

    const updateCounter = () => {
      if (current >= 100) return;

      let increment = Math.floor(Math.random() * 10) + 1;
      current += increment;

      if (current > 100) current = 100;

      setCurrentValue(current);

      const delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    };

    updateCounter();

    // GSAP animations
    gsap.to(".counter", { delay: 3.5, opacity: 0, duration: 0.25 });
    gsap.to(".bar", {
      delay: 3.5,
      height: 0,
      duration: 1.5,
      stagger: { amount: 0.5 },
      ease: "power4.inOut",
    });
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Counter */}
      <div className="counter fixed flex justify-end items-end w-full h-full text-white p-2 text-[20vw]">
        {currentValue}
      </div>

      {/* Overlay and Bars */}
      <div className="overlay fixed inset-0 flex z-20">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bar w-[10vw] h-[105vh] bg-green-700"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default LineLoader;
