import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TransformingHero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const text = textRef.current;
    const content = contentRef.current;

    // INITIAL SETUP
    // Hide text initially by moving it left (-100%) and setting opacity to 0
    gsap.set(text, { xPercent: -100, opacity: 0 });
    // Set scrollable height - ADJUST THIS VALUE to control scroll distance
    // Increase for longer scroll, decrease for shorter scroll
    gsap.set(content, { height: '200vh' }); // Try values between 200vh to 300vh

    // SCROLL TRIGGER CONFIGURATION
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',     // Animation starts when container hits viewport top
        end: '100% top',      // Animation ends when container bottom hits viewport top
        scrub: 1,           // SMOOTHNESS CONTROL - Increase for smoother/slower (try 0.5 to 3)
        pin: true,            // Pins the section during scroll
        anticipatePin: 1,     // Improves pin performance
        // Uncomment below options for more control
         markers: true,     // Shows scroll trigger markers (helpful for debugging)
         smoothTouch: true, // Enables smooth scrolling on touch devices
         toggleActions: "play none none reverse", // Controls animation play behavior
      },
    });

    // ANIMATION TIMELINE
    tl
      // Image animation
      .to(image, {
        width: '50%',
        height: '80vh',
        right: '2rem',
        top: '5rem',
        borderRadius: '5rem',
        ease: 'power2.inOut',    // ANIMATION EASING - Try different values:
                                // 'power1.inOut' (gentle)
                                // 'power3.inOut' (dramatic)
                                // 'expo.inOut' (sharp)
                                // 'elastic.out(1, 0.3)' (bouncy)
        duration: 1.5,           // ANIMATION DURATION - Adjust for faster/slower animation
        transformOrigin: 'right center', // Smoother scaling from right side
      })
      // Text animation
      .to(text, {
        xPercent: 0,
        opacity: 1,
        ease: 'power2.out',     // Text animation easing
        duration: 1,            // Text animation duration
        stagger: {              // STAGGER EFFECT for text elements
          amount: 0.3,          // Total stagger time
          from: "start",        // Stagger starting point
        }
      }, '<0.2');              // Start slightly after image animation begins

    // OPTIONAL SMOOTH SCROLL
    // Uncomment below for custom smooth scrolling
  
    gsap.to(window, {
      duration: 0.1,
      scrollTo: {
        y: content,
        autoKill: true,
        ease: 'power2.inOut'
      }
    });
   

    // Cleanup function
    return () => {
      // Kill all ScrollTriggers to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={contentRef} 
      className="relative w-full"
      // Optional: Add smooth-scroll behavior
      // style={{ scrollBehavior: 'smooth' }}
    >
      <div 
        ref={containerRef} 
        className="relative w-full h-screen overflow-hidden bg-black"
      >
        {/* Text Content */}
        <div 
          ref={textRef}
          className="absolute top-1/2 left-16 transform -translate-y-1/2 text-white z-10 w-1/2"
        >
          <h1 className="font-serif text-6xl mb-6 transition-transform duration-500">
            Web design &<br />
            custom Webflow<br />
            development
          </h1>
          <p className="text-gray-400 text-lg mb-8 transition-opacity duration-300">
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
          className="absolute top-0 right-0 w-full h-screen bg-cover bg-center transition-all duration-300"
        >
          <img 
            src="/src/assets/images/bghero.jpeg"
            alt="Designer"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default TransformingHero;