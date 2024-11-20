import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LineLoader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  useEffect(() => {
    const lines = Array.from(containerRef.current.children);

    // Set initial state: all divs are out of view at the bottom
    gsap.set(lines, {
      yPercent: 100,
      opacity: 0,
    });

    // Timeline for stacking divs from bottom to top
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      onComplete: () => {
        // Start the second animation to remove divs
        removeDivs();
      },
    });

    // Animate divs stacking
    tl.to(lines, {
      yPercent: 0,
      opacity: 1,
      duration: 0.5,
      stagger: {
        each: 0.05,
        from: 'end', // Start stacking from the bottom
      },
    });

    // Function to remove divs from top to bottom
    const removeDivs = () => {
      gsap.to(lines, {
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
        stagger: {
          each: 0.05,
          from: 'start', // Start removing from the top
        },
        onComplete: () => {
          onComplete?.(); // Notify the parent that the animation is complete
        },
      });
    };

    return () => {
      tl.kill(); // Clean up the timeline
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex flex-col justify-end overflow-hidden z-50"
    >
      {numbers.map((number) => (
        <div key={number} className="h-[10vh] bg-white"></div>
      ))}
    </div>
  );
};

export default LineLoader;
