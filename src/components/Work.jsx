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
      const content = card.querySelector('.content-wrapper');
      
      card.addEventListener('mouseenter', () => {
        gsap.to(content, {
          y: -5,
          duration: 0.4,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
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
      videoId: '5OEk9v8Tzn4', // Example YouTube video ID
      link: "https://thepremiersteels.com",
      stats: [
        { value: '+77%', label: 'Avg. session time' },
        { value: 'x1.8', label: 'Conversions' }
      ]
    },
    {
      title: 'Luxe moto',
      videoId: 'jK2rgkw_sOw', // Example YouTube video ID
      link: "https://luxemoto.in",
      stats: []
    },
    {
      title: 'Amani Motors',
      link: "https://amanimotors.in",
      videoId: 'Uu_pSi12Q7U', // Example YouTube video ID
      stats: []
    },
    {
      title: 'Alt Co',
      link: "https://team-nkg-reimagine-round1.vercel.app/",
      videoId: 'lrXv7fnu0Yg', // Example YouTube video ID
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
                {/* Video */}
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&controls=0&modestbranding=1&loop=1&showinfo=0&mute=1`}
                    title={project.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full object-cover object-center"
                  ></iframe>
                </div>

                {/* Content */}
                <div className="content-wrapper absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-white text-2xl md:text-3xl font-light">
                      {project.title}
                    </h2>
                    <button
                      className="bg-zinc-800 text-slate-300 px-4 py-1.5 rounded text-lg hover:scale-110 hover:border hover:text-white transition-all font-light"
                      onClick={() => window.location.href = project.link}
                    >
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
