import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../assets/js/data';
import TiltEffect from './TiltCard';
import { NavLink } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {

  return (
    <section className="w-full min-h-screen bg-black pb-10">
      <div className="container mx-auto px-4 py-20">
        {/* Heading */}
        <h1
          // ref={headingRef}
          className="text-white text-5xl md:text-7xl font-extralight text-center mb-20"
        >
          Work
        </h1>

        {/* Projects Grid */}

        <div className="max-w-6xl mx-auto">
          <div className="md:grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center overflow-x-auto whitespace-nowrap">
            {projectsData.slice(0, 4).map((project, index) => (
              <div className="inline-block" key={index}>
                <TiltEffect project={project} />
              </div>
            ))}
          </div>
        </div>


        <div className='text-white text-center mt-16 uppercase text-base md:text-xl'>
          <NavLink to='/work'>see more work</NavLink>
        </div>



      </div>
    </section>
  );
};

export default Work;
