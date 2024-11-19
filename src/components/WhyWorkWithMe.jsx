import React from "react";

const WhyWorkWithMe = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Fixed Section */}
      <div className="lg:sticky lg:top-0 lg:h-screen flex items-center justify-center bg-white p-6 lg:w-1/3">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-center lg:text-left">
          Why work <br className="hidden lg:block" /> with me
        </h1>
      </div>

      {/* Right Scrollable Section */}
      <div className="flex-1 overflow-y-auto scrollbar-hide p-6 pt-16 space-y-16 md:space-y-12 lg:space-y-20 bg-white">
        {/* Section 1 */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center lg:text-left">
            1. Professional Webflow Partner
          </h2>
          <p className="text-gray-600 mx-4 md:mx-12 lg:mx-20 text-base md:text-lg lg:text-2xl text-slate-400 text-center lg:text-left">
            I'm 1 of 13 official Webflow partners in Italy. With nearly five years of experience developing websites in Webflow, I'm efficient at
            building beautiful, CMS-powered websites. Learn more about my Webflow process.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center lg:text-left">
            2. Award-winning design
          </h2>
          <p className="text-gray-600 mx-4 md:mx-12 lg:mx-20 text-base md:text-lg lg:text-2xl text-slate-400 text-center lg:text-left">
            Years of experience in design and Webflow development together allow me to create unique and cohesive experiences that get recognized.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center lg:text-left">
            3. Result-oriented work
          </h2>
          <p className="text-gray-600 mx-4 md:mx-12 lg:mx-20 text-base md:text-lg lg:text-2xl text-slate-400 text-center lg:text-left">
            I approach every project with a focus on achieving tangible results. From design to functionality, I want to help you achieve your goals, not just
            build something that looks nice. Let's work together to create a website that gets results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithMe;
