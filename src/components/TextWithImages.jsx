import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { textSectionImg } from '../utils/constants';

gsap.registerPlugin(ScrollTrigger);

const TextWithImages = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)'); // 'md' breakpoint (768px and up)

    // Function to apply hover effect
    const applyHoverEffect = () => {
      gsap.utils.toArray('.hover-scale').forEach((image) => {
        gsap.set(image, { scale: 1 });
        image.addEventListener('mouseenter', () => {
          gsap.to(image, { scale: 3, duration: 0.3, ease: 'power1.out' });
        });
        image.addEventListener('mouseleave', () => {
          gsap.to(image, { scale: 1, duration: 0.3, ease: 'power1.out' });
        });
      });
    };

    // Apply hover effect only if media query matches
    if (mediaQuery.matches) {
      applyHoverEffect();
    }

    // Listen for changes in screen size
    mediaQuery.addEventListener('change', (e) => {
      if (e.matches) {
        applyHoverEffect();
      }
    });

    return () => {
      // Clean up event listener on unmount
      mediaQuery.removeEventListener('change', (e) => {
        if (e.matches) {
          applyHoverEffect();
        }
      });
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen md:px-4 text-center">
      <div className="text-white font-serif">
        <h1 className="text-4xl md:text-5xl leading-normal md:leading-loose mx-10 md:mx-20">
          Hi, we're
          {/* <span className="inline-block hover-scale transition-all">
            <img
              src="/src/assets/images/premiersteel.png"
              alt=""
              className="w-12 h-8 md:w-16 md:h-16 rounded-sm object-cover inline-block"
            />
          </span> */}
          {' '}
          Cyfletech,
            {/* <span className="inline-block hover-scale transition-all">
            <img
              src="/src/assets/images/premiersteel.png"
              alt=""
              className="w-12 h-8 md:w-16 md:h-16 rounded-sm object-cover inline-block"
            />
          </span> */}
          {' '}
          Full Stack web designers & developers working on
           
          crafting visually stunning
          {' '}
          <span className="inline-block hover-scale transition-all">
            <img
              src={textSectionImg}
              alt=""
              className="w-12 h-8 md:w-16 md:h-16 rounded-sm object-cover inline-block"
            />
          </span>
          {' '}
           and highly functional websites that elevate your brand.
        </h1>
      </div>
    </div>
  );
};

export default TextWithImages;
