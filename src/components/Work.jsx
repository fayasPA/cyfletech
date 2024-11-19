import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Heading animation
    gsap.from(headingRef.current, {
      y: 50,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out'
    });

    // Cards animation
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 1,
        duration: 1,
        delay: index * 0.2,
        ease: 'power3.out'
      });

      // Hover animation
      const image = card.querySelector('img');
      const content = card.querySelector('.content-wrapper');
      
      gsap.set(image, { scale: 1 });
      
      card.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.05,
          duration: 0.4,
          ease: 'power2.out'
        });
        gsap.to(content, {
          y: -5,
          duration: 0.4,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
        gsap.to(content, {
          y: 0,
          duration: 0.4,
          ease: 'power2.out'
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const projects = [
    {
      title: 'Premiersteel',
      image: '/src/assets/images/premiersteel.png',
      stats: [
        { value: '+77%', label: 'Avg. session time' },
        { value: 'x1.8', label: 'Conversions' }
      ]
    },
    {
      title: 'Luxe moto',
      image: '/src/assets/images/luxmoto.png',
      stats: []
    },
    {
        title: 'Luxe moto',
        image: '/src/assets/images/luxmoto.png',
        stats: []
      },
      {
        title: 'Luxe moto',
        image: '/src/assets/images/luxmoto.png',
        stats: []
      }
  ];

  return (
    <section className="w-full min-h-screen bg-black pb-10">
      <div className="container mx-auto px-4 py-20">
        {/* Heading */}
        <h1 
          ref={headingRef}
          className="text-white text-5xl md:text-7xl font-extralight text-center mb-20"
        >
          Work
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1400px] mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={el => cardsRef.current[index] = el}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-zinc-900 h-full">
                {/* Image */}
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content */}
                <div className="content-wrapper absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-white text-2xl md:text-3xl font-light">
                      {project.title}
                    </h2>
                    <button className="bg-zinc-800 text-white px-4 py-1.5 rounded text-sm font-light">
                      WEBSITE
                    </button>
                  </div>

                  {project.stats.length > 0 && (
                    <div className="flex gap-8">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="text-white">
                          <span className="text-xl md:text-2xl font-medium block">
                            {stat.value}
                          </span>
                          <span className="text-sm text-zinc-400 font-light">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;