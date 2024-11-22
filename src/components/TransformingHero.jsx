import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';

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

    // Set up GSAP timeline with ScrollTrigger for the image and text
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container, // The element that triggers the animation
        start: 'top top', // Start animation when the container hits the top of the viewport
        end: '200% top', // End animation when the container's bottom reaches the top
        scrub: 1, // Smooth scrubbing effect
        pin: true, // Pins the section during scroll
        anticipatePin: 1, // Optimizes pinning performance
        markers: false, // Enable for debugging
      },
    });

    // Scroll animation for small screens (below 768px)
    if (window.innerWidth < 768) {
      tl.to(image, {
        width: '100%', // Full width on scroll
        height: '50vh', // Adjust height for small screens
        top: '50%', // Position the image on the bottom half of the screen
        ease: 'power2.inOut',
        duration: 1.5,
      })
        .to(text, {
          opacity: 1, // Ensure text is visible initially
          y: '-10%', // Move text to the top half of the screen as the user scrolls
          ease: 'power2.out',
          duration: 1.5,
        });
    } else {
      // Scroll animation for larger screens (md and above)
      tl.to(image, {
        width: '50%', // Shrinks the image width
        height: '70vh', // Adjusts the height of the image
        top: '5rem', // Repositions the image
        right: '2rem', // Moves it closer to the center
        borderRadius: '2rem', // Adds rounded corners
        ease: 'power2.inOut', // Smooth easing
        duration: 1.5, // Animation duration
      });

      tl.to(text, {
        opacity: 1, // Ensure text appears normally for larger screens
        ease: 'power2.out',
        duration: 1.5,
      });
    }

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
        className="absolute top-[30%] md:top-[50%] left-16 transform -translate-y-1/2 text-white z-10 w-1/2 opacity-100" // Set opacity to 100 here to make the text visible initially
      >
        <h1 className="font-serif text-2xl md:text-6xl mb-6">
          End to End<br />
          Business<br />
          Solutions
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          FULL STACK DEVELOPMENT EXPERTS<br />
          HELPING YOU BUILD BEAUTIFUL AND<br />
          SCALABLE WEBSITE EXPERIENCES
        </p>
        <NavLink to='/contact' className="flex items-center space-x-2 text-[#00FF85] hover:text-white transition-colors">
          <div className="w-3 h-3 rounded-full bg-current"></div>
          <span>CONTACT</span>
        </NavLink>
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
