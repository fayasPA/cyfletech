import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';
import { homeHeroImg } from '../utils/constants';

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
    } else {
      // Scroll animation for larger screens (md and above)
      tl.to(image, {
        width: '50%', // Shrinks the image width
        height: '70vh', // Adjusts the height of the image
        top: '5rem', // Repositions the image
        right: '2rem', // Moves it closer to the center
        borderRadius: '5%', // Adds rounded corners
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
        className="absolute inset-0 flex items-center md:justify-start  md:pl-20 text-borderColor z-10 md:w-1/2 h-1/2 md:h-full" // Center the content and make it take half the width
      >
        <div className='mt-5 sm:mt-0 ml-4 sm:ml-0 uppercase border-[0.5px] border-selGray rounded-md border-dashed p-4'>
          <h1 className="text-[1.5rem] sm:text-2xl md:text-6xl mb-3 md:mb-6">
            End to End<br />
            Business
            Solutions
          </h1>
          <p className="text-selGray text-sm md:text-lg">
            FULL STACK DEVELOPMENT EXPERTS<br className='block md:hidden' />
            HELPING YOU BUILD BEAUTIFUL AND<br className='block md:hidden' />
            SCALABLE WEBSITE EXPERIENCES
          </p>
          {/* <NavLink to='/contact' className="flex items-center space-x-2 text-[#00FF85] hover:text-white transition-colors">
            <div className="w-3 h-3 rounded-full bg-current"></div>
            <span>CONTACT</span>
          </NavLink> */}
        </div>
      </div>

      {/* Image Container */}
      <div
        ref={imageRef}
        className="absolute top-0 right-0 w-full h-screen bg-cover bg-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1642697283420-194938fcc339?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // src={homeHeroImg}
          alt="Designer"
          className="w-full h-full object-cover rounded-xl"
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[0.09rem] md:backdrop-blur-[.2rem]"></div>
      </div>
    </div>
  );
};

export default TransformingHero;
