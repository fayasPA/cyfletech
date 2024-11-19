import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextWithImages = () => {
  useEffect(() => {
    // GSAP hover effect for scaling images
    gsap.utils.toArray('.hover-scale').forEach((image) => {
      gsap.set(image, { scale: 1 });
      image.addEventListener('mouseenter', () => {
        gsap.to(image, { scale: 3, duration: 0.3, ease: 'power1.out' });
      });
      image.addEventListener('mouseleave', () => {
        gsap.to(image, { scale: 1, duration: 0.3, ease: 'power1.out' });
      });
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4 text-center">
      <div className="text-white font-serif">
        <h1 className="text-3xl md:text-5xl leading-relaxed md:leading-loose mx-20">
          Hi, we're<span className="inline-block hover-scale transition-all">
            <img
              src="/src/assets/images/premiersteel.png"
              alt=""
              className="w-12 h-8 md:w-16 md:h-16 rounded-sm object-cover inline-block"
            />
          </span>{' '}
          Cyfletech,  <span className="inline-block hover-scale transition-all">
            <img
              src="/src/assets/images/premiersteel.png"
              alt=""
              className="w-12 h-8 md:w-16 md:h-16 rounded-sm object-cover inline-block"
            />
          </span>{' '}
          web designers & developers working on <span className="inline-block hover-scale transition-all">
            <img
              src="/src/assets/images/luxmoto.png"
              alt=""
              className="w-12 h-8 md:w-16 md:h-16 rounded-sm object-cover inline-block"
            />
          </span>{' '}
          Webflow experiences, crafting visually stunning and highly functional websites that elevate your brand.
        </h1>
      </div>
    </div>
  );
};

export default TextWithImages;
