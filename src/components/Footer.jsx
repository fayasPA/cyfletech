import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { companyEmail, companyPhoneNo, navLists } from '../utils/constants';
import { NavLink } from 'react-router-dom';
import { socials } from '../assets/js/data';

const Footer = () => {
  const footerRef = useRef(null);
  const titleRef = useRef(null);
  const emailRef = useRef(null);
  const textRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: footerRef.current,
  //       start: "top bottom",
  //       end: "top center",
  //       scrub: 1
  //     }
  //   });

  //   tl.fromTo(
  //     titleRef.current,
  //     {
  //       y: 50,
  //       opacity: 0
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 1,
  //       ease: "power3.out"
  //     }
  //   )
  //     .fromTo(
  //       emailRef.current,
  //       {
  //         y: 30,
  //         opacity: 0
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 1,
  //         ease: "power3.out"
  //       },
  //       "-=0.5"
  //     )
  //     .fromTo(
  //       textRef.current,
  //       {
  //         y: 30,
  //         opacity: 0
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 1,
  //         ease: "power3.out"
  //       },
  //       "-=0.5"
  //     );

  //   return () => {
  //     ScrollTrigger.getAll().forEach(t => t.kill());
  //   };
  // }, []);

  return (
    <footer ref={footerRef} className="min-h-screen bg-black text-white flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row">
        {/* Left Column: Title and Email */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col justify-between">
          <div className="mb-10 md:mb-0 flex space-x-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-borderColor text-3xl md:text-5xl transition-colors duration-500 ">
                <span className="">{social.icon}</span>
              </a>
            ))}

          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-16 leading-tight text-white"
          >
            Do you want to start<br />
            a project together?
          </h2>

          <div ref={emailRef}>
            <a
              href={`mailto:${companyEmail}`}
              className="text-zinc-400 px-6 py-3 rounded-xl 
      hover:bg-zinc-800 transition-colors duration-300 text-xl md:text-base uppercase border border-dashed border-gray border-[#535556] bg-[#1d1f20]"
            >
              {companyEmail}
            </a>
          </div>



        </div>


        {/* Right Column: NavLists and Collaboration Text */}
        <div className="w-full md:w-1/2 flex flex-row md:flex-col items-start">
          {/* NavLists */}
          <div className="space-y-5 text-xl md:text-2xl uppercase mb-16 md:mr-12 w-full">
            {navLists.map((item, index) => (
              <NavLink
                key={item.order}
                to={item.path}
                className="block md:text-right transition duration-300"
              >
                <span
                  className={`${hoveredIndex !== null && hoveredIndex !== index
                    ? 'filter blur-sm'
                    : ''
                    } transition-filter duration-300`}  // Add transition for the blur effect
                  onMouseEnter={() => setHoveredIndex(index)}  // Set hover index
                  onMouseLeave={() => setHoveredIndex(null)}   // Reset hover index
                >
                  {item.name}
                </span>
              </NavLink>
            ))}
          </div>

          {/* Collaboration Text */}
          <div className="text-borderColor line text-base md:text-xl max-w-48 md:max-w-xl ml-auto text-right">
            <p
              ref={textRef}
              className='leading-6 text-left md:text-right'
            >
              ARE YOU AN AGENCY OR A FREELANCER? WE ALWAYS WELCOME NEW OPPORTUNITIES TO EXCHANGE IDEAS AND TO EXPLORE COLLABORATIONS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
