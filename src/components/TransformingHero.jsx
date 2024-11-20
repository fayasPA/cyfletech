import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TransformingHero = () => {
  // Refs for DOM elements
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    // Set up GSAP timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container, // The element that triggers the animations
        start: 'top top', // Start animation when the container hits the top of the viewport
        end: '200% top', // End animation when the container's bottom reaches the top
        scrub: 1, // Smooth scrubbing effect
        pin: true, // Pins the section during scroll
        anticipatePin: 1, // Optimizes pinning performance
        markers: false, // Enable for debugging
      },
    });

    // Image animation (resizing and repositioning)
    tl.to(image, {
      width: '50%', // Shrinks the image width
      height: '70vh', // Adjusts the height of the image
      top: '5rem', // Repositions the image
      right: '2rem', // Moves it closer to the center
      borderRadius: '2rem', // Adds rounded corners
      ease: 'power2.inOut', // Smooth easing
      duration: 1.5, // Animation duration
    });

    // Text animation (revealing text)
    tl.to(
      text,
      {
        xPercent: 0, // Slides text into view
        opacity: 1, // Fades text in
        ease: 'power2.out', // Smooth easing
        duration: 1, // Animation duration
        stagger: { amount: 0.3 }, // Staggered animation for child elements
      },
      '<' // Ensures text animation starts with the image animation
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Text Content */}
      <div
        ref={textRef}
        className="absolute top-1/2 left-16 transform -translate-y-1/2 text-white z-10 w-1/2 opacity-0"
      >
        <h1 className="font-serif text-6xl mb-6">
          Web design &<br />
          custom Webflow<br />
          development
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          DESIGNER & WEBFLOW EXPERT<br />
          HELPING YOU BUILD BEAUTIFUL AND<br />
          SCALABLE WEBSITE EXPERIENCES
        </p>
        <button className="flex items-center space-x-2 text-[#00FF85] hover:text-white transition-colors">
          <div className="w-3 h-3 rounded-full bg-current"></div>
          <span>CONTACT</span>
        </button>
      </div>

      {/* Image Container */}
      <div
        ref={imageRef}
        className="absolute top-0 right-0 w-full h-screen bg-cover bg-center"
      >
        <img
          src="/src/assets/images/home_bg.jpg"
          alt="Designer"
          className="w-full h-full object-cover rounded-xl"
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    </div>
  );
};

export default TransformingHero;
