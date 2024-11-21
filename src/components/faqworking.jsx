import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../assets/css/Faq.css'
gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  useEffect(() => {
    const faqDetails = gsap.utils.toArray(".faq-desktop-content-section:not(:first-child)");
    const faqPhotos = gsap.utils.toArray(".faq-desktop-photo:not(:first-child)");
    gsap.set(faqPhotos, { yPercent: 101 });

    const allFaqPhotos = gsap.utils.toArray(".faq-desktop-photo");

    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      ScrollTrigger.create({
        trigger: ".faq-gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".faq-right",
      });

      faqDetails.forEach((detail, index) => {
        let headline = detail.querySelector("h1");
        let animation = gsap.timeline()
          .to(faqPhotos[index], { yPercent: 0 })
          .set(allFaqPhotos[index], { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });
  }, []);

  return (
    <div className="faq-container">
      <div className="faq-gallery">

        <div className="faq-right text-white">
      <h1 className="text-4xl font-serif text-center mb-10">FAQs</h1>
        </div>

        <div className="faq-left">
          <div className="faq-desktop-content text-white">
            <div className="faq-desktop-content-section">
              <h1>Red</h1>
              <p>Red is a color often associated with strong emotions such as passion, love, and anger. It's bold and attention-grabbing.</p>
            </div>
            <div className="faq-desktop-content-section">
              <h1>Green</h1>
              <p>Green is often associated with nature, growth, and harmony. It's calming and evokes balance and stability.</p>
            </div>
            <div className="faq-desktop-content-section">
              <h1>Pink</h1>
              <p>Pink is associated with femininity, romance, and sweetness. It evokes feelings of warmth and love.</p>
            </div>
            <div className="faq-desktop-content-section">
              <h1>Blue</h1>
              <p>Blue represents calmness, trust, and reliability. It's a peaceful color that signifies stability and professionalism.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-spacer"></div>
    </div>
  );
};

export default FAQ;
