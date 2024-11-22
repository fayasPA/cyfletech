import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../assets/js/data';
import TiltEffect from './TiltCard';
import { Link, NavLink, useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const location = useLocation();

  // Check if the current path is "/work"
  const isWorkPage = location.pathname === '/work';
  const projectsToDisplay = isWorkPage ? projectsData : projectsData.slice(0, 4);

  return (
    <section className="w-full min-h-screen bg-black pb-10">
      <div className="container mx-auto px-4 py-20">
        {/* Heading */}
        <h1
          // ref={headingRef}
          className="section-heading text-center mb-20 text-white"
        >
          Works
        </h1>

        {/* Projects Grid */}

        <div className="max-w-6xl mx-auto">
          <div className="md:grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center overflow-x-auto whitespace-nowrap">
            {projectsToDisplay.map((project, index) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mx-2 md:mx-0"
                key={index}
              >
                <TiltEffect project={project} />
              </a>
            ))}

          </div>
        </div>

        {!isWorkPage &&
          <div className='text-white text-center mt-16 uppercase text-base md:text-xl'>
            <NavLink to='/work' className='border border-borderColor px-3 py-2 rounded-lg bg-selGray-200 hover:bg-selGray transition-colors duration-500' >see more work</NavLink>
          </div>
        }



      </div>
    </section>
  );
};

export default Work;
